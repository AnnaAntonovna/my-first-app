import { getSidebarTools } from "./SidebarTools";
import { useAppContext } from "../../../middleware/ContextProvider";
import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../../config/motion";
import { FrontMenuMode } from "../types";

export const BuildingSidebar: FC<{
  open: boolean;
  onToggleMenu: (active?: boolean, mode?: FrontMenuMode) => void;
}> = (props) => {
  const { open, onToggleMenu } = props;
  const [state, dispatch] = useAppContext();

  const tools = getSidebarTools(state, dispatch, onToggleMenu);

  return (
    <>
          {tools.map((tool) => (
            <button
              onClick={() => tool.action({onToggleMenu, state, dispatch})}
              key={tool.name}
              className="flex items-center justify-center p-5 text-primary hover:text-primary-900 hover:underline hover:decoration-wavy hover:decoration-inherit transition duration-150 ease-in-out"
            >
              <div className="mr-1">{tool.icon} </div>
              {tool.name}
            </button>
          ))}
          </>
  );
};
