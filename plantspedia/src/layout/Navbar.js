import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NavBar({ }) {
  const [publish, setPublish] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPublish(router.pathname.includes("publish"));
  }, []);

  return (
      <div className="fixed top-0 w-full z-10 shadow-md">
          <div className="container mx-auto max-w-[728px]">
              <div className="flex items-center justify-between w-full h-20">
                  <div className="flex items-center justify-between">
                      {router.pathname === "/dashboard" ? (
                          <div
                              className="flex cursor-pointer bg-[#7CBD1E] hover:bg-[#BCEB3C] text-white p-2 border-2 rounded-lg"
                              onClick={() => {
                                  navigator.clipboard.writeText(window.did)
                              }}
                          >
                              {`${window.did?.slice(0, 16)}...`}{" "}
                              <svg
                                  className="h-4 w-4 text-gray-500"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                              >
                                  {" "}
                                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                  <rect x="8" y="8" width="12" height="12" rx="2" />{" "}
                                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                              </svg>
                          </div>
                      ) : (
                          <Link href="/dashboard">
                              <button className="bg-[#7CBD1E] hover:bg-[#BCEB3C] p-2 rounded transition-colors duration-200 ease-in-out transform">
                                  &#8592; Dashboard
                              </button>
                          </Link>
                      )}
                  </div>

                  <div className="flex">
                      <Link href="/dashboard">
                          <button
                              className={`w-24 h-10 rounded-md transition-colors duration-200 ease-in-out transform mr-2 ${
                                  !publish
                                      ? "border-2 border-black text-[#7CBD1E] font-semibold cursor-not-allowed"
                                      : "bg-[#7CBD1E] hover:bg-[#BCEB3C] text-white cursor-pointer"
                              }`}
                              disabled={!publish}
                          >
                              Explore
                          </button>
                      </Link>
                      <Link href="/publish">
                          <button
                              className={`w-24 h-10 rounded-md transition-colors duration-200 ease-in-out transform ${
                                  publish
                                      ? "border-2 border-black text-[#BCEB3C] font-semibold cursor-not-allowed"
                                      : "bg-[#7CBD1E] hover:bg-[#BCEB3C] text-white cursor-pointer"
                              }`}
                              disabled={publish}
                          >
                              Publish
                          </button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}
