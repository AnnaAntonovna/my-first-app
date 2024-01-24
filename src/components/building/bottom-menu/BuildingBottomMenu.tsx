import React, { FC, useEffect, useState } from "react";
import { getBottomBarTools } from "./BottomBarTools";
import { useAppContext } from "../../../middleware/ContextProvider";

export const BuildingBottomMenu: FC = () => {
  const [state, dispatch] = useAppContext();
  const [activeTools, setActiveTools] = useState<{ [key: string]: boolean }>(
    {}
  );

  const tools = getBottomBarTools(state, dispatch);

  useEffect(() => {
    // Initialize activeTools state based on the tools' initial active state
    const toolStates: { [key: string]: boolean } = {};
    tools.forEach((tool) => {
      toolStates[tool.name] = tool.active as boolean;
    });
    setActiveTools(toolStates);
  }, []);

  const handleToolClick = (toolName: string) => {
    // Update the active state for the tool
    setActiveTools((prevActiveTools) => {
      const isActive = !prevActiveTools[toolName];

      // Call the tool's action function
      switch (toolName) {
        case "Clipping planes":
          dispatch({ type: "TOGGLE_CLIPPER", payload: isActive });
          break;
        case "Dimensions":
          dispatch({ type: "TOGGLE_DIMENSIONS", payload: isActive });
          break;
        case "Explosion":
          dispatch({ type: "EXPLODE_MODEL", payload: isActive });
          break;

        case "Floorplan":
          dispatch({ type: "TOGGLE_FLOORPLAN", payload: isActive });
          break;
        default:
          console.log("No action defined for this tool");
      }

      return { ...prevActiveTools, [toolName]: isActive };
    });
  };

  return (
    <div className="absolute bottom-12 h-12 b-12 left-1/2 -translate-x-1/2 flex items-center">
      {tools.map((tool) => (
        <button
          onClick={() => handleToolClick(tool.name)}
          className={
            activeTools[tool.name]
              ? "p-0 h-full w-12 m-1 text-center bg-primary text-white rounded-full duration-200 ease-in-out"
              : "p-0 h-full w-12 m-1 text-center text-primary bg-secondary-100 hover:bg-primary hover:text-primary-200 rounded-full duration-200 ease-in-out"
          }
          key={tool.name}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};
