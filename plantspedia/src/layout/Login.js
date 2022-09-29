// import { useEffect } from "react";
import { useRouter } from 'next/router'
import { authenticate } from "../../lib/feed";
// import { plantlogin } from "./plantpedialogin.jpg"
import Image from "next/image"

export default function Login({ setCurrentAccount }) {
  const router = useRouter()

	const didAuth = async () => {
		const ceramicID = await authenticate();
		if (ceramicID) {
			console.log("Logged in: " + ceramicID);
			router.push('/dashboard')
		} else {
			console.warn("Login Failed");
		}
	};

  // useEffect(() => {
		// didAuth()
  // }, []);

  return (
      <main>
      <div className=" min-h-screen bg-plant bg-cover">
              <div className="min-h-screen flex justify-center items-center">     
                      <button
                          className="flex justify-center items-center bg-[#7CBD1E] hover:bg-[#BCEB3C] text-white px-7 h-12 rounded-md cursor-pointer transition-colors duration-200 ease-in-out transform"
                          onClick={didAuth}
                      >
                          Login&nbsp;
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-door-open-fill"
                              viewBox="0 0 16 16"
                          >
                              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                          </svg>
                      </button>
              
              </div>
          </div>
      </main>
  )
}
