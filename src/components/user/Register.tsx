import { useState, FC, FormEvent } from "react";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/ContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../config/motion";
import shareVideo from "../../asssets/map.mp4";
import logo from "../../asssets/logo.png";
import { useUserContext } from "../../UserProvider";
import { Navigate } from "react-router-dom";

export const Register: FC = () => {
  const [name, setName] = useState<string>("");
  const [state, dispatch] = useAppContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string>(
    `Enter your data.`
  );
  const [emailError, setEmailError] = useState<string>("");

  const auth = getAuth();
  const [user, setUser] = useUserContext();

  const navigate = useNavigate();

  const validatePassword = (value: string) => {
    if (value.length >= 6) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError(`⛔️ Password must be at least 6 characters long.`);
      return false;
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(value)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("⛔️ Enter a valid email address.");
      console.log("⛔️ Enter a valid email address.");
      return false;
    }
  };

  const onRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const newUser = response.user;

    await updateProfile(newUser, { displayName: name });
    setUser(user);

    try {
        await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
        setError("⛔️ Invalid email or password"); 
      }
  };

  return (
    <div className="flex justify-start h-screen w-screen">
      <AnimatePresence>
        <div className="mscreen:w-1/3 pl-5 pr-5 mscreen:pl-10 mscreen:pr-10">
          {!state.user && (
            <motion.section {...slideAnimation("left")}>
              <div className="h-screen flex flex-col items-center justify-center">
                <img src={logo} className="mb-0 h-1/4 w-1/3 min-w-fit mt-5" />
                <form onSubmit={onRegister} className="w-full">
                  {error && (
                    <p className="mb-2 field error bg-danger pb-2.5 rounded pt-3 text-sm">
                      {error}
                    </p>
                  )}
                  <p>Login</p>
                  <input
                    type="email"
                    className="mb-0 w-full pb-2.5 rounded input"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      validateEmail(event.target.value);
                    }}
                  ></input>
                  <div  className="mb-6" hidden={emailError !== ""}/>
                  <p className="error" hidden={emailError === ""}>
                    {emailError}
                  </p>
                  <p>Password</p>
                  <input
                    type="password"
                    className="mt-0 w-full pb-2.5 rounded input"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      validatePassword(event.target.value);
                    }}
                  ></input>
                  <p
                    className="error"
                    hidden={passwordError === ""}
                  >{passwordError}</p>
                  <button
                    type="submit"
                    className="mt-6 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    disabled={passwordError !== "" || emailError !== ""}
                  >
                    Sign up
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    style={{ backgroundColor: "#55acee" }}
                    href="/my-login"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                      />
                    </svg>
                    Go back to signing in!
                  </a>
                </form>
              </div>
            </motion.section>
          )}
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
        <div className="z-1 absolute w-full h-gull top-0 right-0 left-0 bottom-0 bg-blackOverlay" />
      </div>)}

      {state.user && <Navigate to='/'/>}
    </div>
  );
};
