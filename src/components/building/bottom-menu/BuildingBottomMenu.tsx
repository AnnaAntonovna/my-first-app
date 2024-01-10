import React, { FC } from "react";
import { getBottomBarTools } from "./BottomBarTools";
import { useAppContext } from "../../../middleware/ContextProvider";

export const BuildingBottomMenu: FC = () => {

    const [state, dispatch] = useAppContext();

    const tools = getBottomBarTools(state, dispatch);
 
    return (
    <div className="absolute bottom-12 h-12 b-12 left-1/2 -translate-x-1/2 flex items-center">
      {tools.map((tool) =>(
        <button onClick={() => tool.action} 
        className={!tool.active ? "p-0 h-full w-12 m-1 text-center text-primary bg-secondary-100 hover:bg-primary hover:text-white rounded-full duration-200 ease-in-out" 
        : "p-0 h-full w-12 m-1 text-center bg-primary text-white rounded-full duration-200 ease-in-out" }
        key={tool.name}>{tool.icon}</button>
      ) )}
    </div>
  );
};
