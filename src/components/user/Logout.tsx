import { FC } from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { useAppContext } from "../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";

export const Logout: FC = () => {
  const [state, dispatch] = useAppContext();

  const auth = getAuth();

  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
    /* signOut(auth);
        navigate('my-login'); */
  };

  return (
    <div>
      {state.user ? (
        <>
         {/*  <p>{state.user.displayName} Но имени может и не быть</p> */}
          <button
            onClick={onLogoutClick}
            className="z-2 inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-danger hover:bg-danger hover:text-white-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            ❌LOUGOUT
          </button>
        </>
      ) : (
        <Navigate to="/my-login" />
      )}

      {/* <button onClick={onLogoutClick}
    className="inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger hover:bg-danger hover:text-white-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    >Logout</button> */}
    </div>
  );
};
