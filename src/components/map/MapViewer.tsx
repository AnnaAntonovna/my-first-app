import React, { FC, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/ContextProvider";
import { Logout } from "../user/Logout";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && state.user) {
      dispatch({ type: "START_MAP", payload: canvas }); 
    }

    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  if (!state.user) {
    return <Navigate to="/" />;
  }
  

  return (
    <>
      <div className="full-screen" ref={canvasRef} /> 
      <div className="absolute">
        <Logout />
        <h1 >MAP!</h1>
      </div>
    </>
  );
};
