import React, { FC, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/ContextProvider";
import { Logout } from "../user/Logout";
import { Action } from "../../middleware/Actions";
import { NormalBlending } from "three";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();

  const containerRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);

  const { user, building } = state;

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

  if (building) {
    const url = `/building?=${building.uid}`;
    return <Navigate to={url} />;
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
            <p className="mr-5">Right click to create a new building or...</p>
            <button
              className="click inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger hover:bg-danger hover:text-white-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              onClick={onToggleCreate}
            >
              cancel
            </button>
          </div>
        )}
        {!isCreating && <div className="gis-button-container">
          {/* <h1>{user.displayName}</h1> */}
          <button
            className="mb-5 bg-white inline-block rounded border-2  border-white border px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white-100 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            onClick={onToggleCreate}
          >
            🏛️ CREATE BULDING
          </button>
          <Logout />
        </div>}
      </div>
    </>
  );
};
