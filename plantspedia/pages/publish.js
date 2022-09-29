import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NavBar from "./../src/layout/Navbar";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import { authenticate, updateFeed } from "../lib/feed";
import { createLock } from "../lib/locks";

const Prose = dynamic(() => import("../src/components/Prose"), {
  ssr: false,
});

export default function Publish() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    if (!window.did) {
      authenticate();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setLoading(true);
    data.body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		data.time = Date.now();
		let lockFailed = false;
		if (data.paid) {
			const lockAddress = await createLock(window.did);
			data.paid = lockAddress;

			if (!lockAddress) { lockFailed = true; }
		}
		if (!lockFailed) {
			const id = await updateFeed(data);
			router.push("/read/" + id);
		}
    setLoading(false);
  };

  return (
      <>
          <div className="min-h-screen bg-plant bg-cover">
              <Head>
                  <title>Publish - PlantsPedia</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <NavBar />
              <div className="container mx-auto mt-20 py-24">
                  <div className="max-w-[728px] mx-auto">
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="flex flex-col ">
                              <input
                                  className="text-4xl font-bold focus:outline-none p-2 rounded-t-md"
                                  type="text"
                                  id="title"
                                  placeholder="Enter title..."
                                  {...register("title", { required: true, maxLength: 80 })}
                              />
                              <input
                                  className="text-xl focus:outline-none pb-5 px-2"
                                  type="text"
                                  id="subtitle"
                                  placeholder="Enter subtitle..."
                                  {...register("subtitle", { required: true, maxLength: 360 })}
                              />
                          </div>

                          <Prose
                              editorState={editorState}
                              onEditorStateChange={onEditorStateChange}
                          />
                          <div className="flex justify-between items-center w-full">
                              <div className="flex">
                                  <div className="flex flex-col text-red-600 text-sm">
                                      <span>{errors.title && "Please enter a title"}</span>
                                      <span>{errors.subtitle && "Please enter a subtitle"}</span>
                                  </div>

                                  <button
                                      className="bg-[#7CBD1E] hover:bg-[#BCEB3C] text-white w-32 h-10 rounded-md cursor-pointer transition-colors duration-200 ease-in-out transform text-left ml-2 pl-[38px]"
                                      type="submit"
                                  >
                                      {loading ? (
                                          <>
                                              <div className="fixed left-3 top-[9px] w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                                              Publishing
                                          </>
                                      ) : (
                                          "Publish"
                                      )}
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </>
  )
}
