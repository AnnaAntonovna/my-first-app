import { useState, FC, FormEvent } from "react";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/ContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../config/motion";
import { TEInput, TERipple } from "tw-elements-react";
import shareVideo from "../../asssets/map.mp4"
import logo from "../../asssets/logo.png";
import { Logout } from "./Logout";
import { Navigate } from "react-router-dom";

export const Login: FC = () => {
  const [state, dispatch] = useAppContext();
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();

  const navigate = useNavigate();

  const onMailLogin = async(event: FormEvent<HTMLFormElement>) => {
    //dispatch({type: "MAIL_LOGIN"})
    event.preventDefault();
    event.stopPropagation();

    /* try {
        await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
        setError("⛔️ Invalid email or password"); 
      } */
      try {
        await dispatch({ type: "MAIL_LOGIN", payload: {email, password} });  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      } catch (error) {
        setError("⛔️ Invalid email or password"); 
      }
  }

  const onLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <div className="flex justify-start h-screen w-screen">
      
      <AnimatePresence>
        <div className="w-min-420 mscreen:w-1/3 pl-5 pr-5">
          {!state.user && (
            <motion.section {...slideAnimation("left")}>
              <div className="h-screen flex flex-col items-center justify-center">
                <img src={logo} className="mb-5 min-h-1/4 min-w-1/3 mt-5 mr-10 ml-10" />
                <form onSubmit={onMailLogin}>
                  {error && <p className="mb-6 field error pb-2.5 rounded pt-3 text-sm">{error}</p>}
                  <p 
                    className="mb-3"
                  >LOGIN</p>
                  <input type="email" className="mb-6 w-full pb-2.5 rounded input"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  ></input>
                  <p
                    className="mb-3"
                  >PASSWORD</p>
                  <input type="password" className="mb-6 w-full pb-2.5 rounded input"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  ></input>

                  <button
                    type="submit"
                    className="click inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Sign in
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    style={{ backgroundColor: "#3b5998" }}
                    disabled={error === null && email !== "" && password !== ""}
                    onClick={onLogin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                     Continue with Google
                  </button>
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    style={{ backgroundColor: "#55acee" }}
                    href="/register"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Create an account
                  </a>
                </form>
              </div>
            </motion.section>
          ) }
        </div>
      </AnimatePresence>
      {!state.user && (
      <div className="w-2/3 relative flex justify-center items-center  hidden xs:block">
        <video
          src={shareVideo}
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="z-1 absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-blackOverlay click" />
      </div>
      )}
      <motion.div
            animate= {{opacity: 0}}
            transition={{ delay: 1.5 }}
            className="bg-white-100 absolute w-screen h-screen flex justify-center items-center pointer-events-none"
          >
            Loading...
      </motion.div>
      {state.user && <Navigate to='/'/>}
    </div>
  );
};
