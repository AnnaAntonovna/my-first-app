import { getPropertiesTools } from "./PropertiesTools";
import { useAppContext } from "../../../middleware/ContextProvider";
import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../../config/motion";

export const BuildingProperties: FC<{
  open: boolean;
  onToggleMenu: () => void;
}> = (props) => {
  const { open, onToggleMenu } = props;
  const [state, dispatch] = useAppContext();

  const tools = getPropertiesTools(state, dispatch, onToggleMenu);

  return (
    <>
          {tools.map((tool) => (
            <button
              onClick={tool.action}
              key={tool.name}
              className="flex items-center justify-center p-5 text-red text-gray-100 hover:text-black transition duration-150 ease-in-out"
            >
              {tool.icon}
              {tool.name}
            </button>
          ))}
    </>
  );
};
