import React, { FC, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/ContextProvider";
import { Logout } from "../user/Logout";
import { Action } from "../../middleware/Actions";

export const MapViewer: FC = () => {
  const containerRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);

  const [state, dispatch] = useAppContext();
  const { user } = state;

  const onToggleCreate = () => {
    setIsCreating(!isCreating);
  };
  const onCreate = () => {
    if (!isCreating) {
      return;
    }
    //..
    dispatch({ type: "ADD_BUILDING", payload: user });
    setIsCreating(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container && user) {
      dispatch({ type: "START_MAP", payload: { container, user } });
    }

    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div
        onContextMenu={onCreate}
        className="full-screen"
        ref={containerRef}
      />
      <div className="absolute">
        {isCreating && (
          <div className="overlay">
            <p>Right click to create a new building or </p>
            <button className="bg-primary click" onClick={onToggleCreate}>
              cancel
            </button>
          </div>
        )}
        <div className="gis-button-container">
          <button className="mb-5 z-2 inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-danger hover:bg-danger hover:text-white-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" onClick={onToggleCreate}>🏛️ CREATE BULDING</button>
          <Logout />
        </div>
        {/* <h1>MAP!</h1> */}
      </div>
    </>
  );
};
