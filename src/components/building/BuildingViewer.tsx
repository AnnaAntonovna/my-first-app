import React, { FC, useState } from "react";
import { useAppContext } from "../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";
import { BuildingTopbar } from "./BuildingTopbar";
import { BuildingSidebar } from "./sidebar/BuildingSidebar";

export const BuildingViewer: FC = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);

  const [state, dispatch] = useAppContext();
  const { user, building } = state;
  const onSideOpen = () => {
    const active = !sideOpen;
    setSideOpen(active);
    console.log("OnOpen");
  };

  if (!building) {
    return <Navigate to={"/map"} />;
  }

  return (
    <>
    
        <BuildingTopbar sideOpen={sideOpen} onOpen={() => onSideOpen()} />
        <div className="hidden md:flex h-screen flex-initial">
        {sideOpen && <BuildingSidebar />}
        </div>
    </>
  );
};
