import { getPropertiesTools } from "./PropertiesTools";
import { useAppContext } from "../../../middleware/ContextProvider";
import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../../config/motion";
import RulerIcon from "@mui/icons-material/Straighten";
import Grid4x4OutlinedIcon from "@mui/icons-material/Grid4x4Outlined";

export const BuildingProperties: FC<{
  open: boolean;
  onToggleMenu: () => void;
}> = (props) => {
  const { open, onToggleMenu } = props;
  const [state, dispatch] = useAppContext();

  const tools = getPropertiesTools(state, dispatch, onToggleMenu);

  return (
    <>
      <div className="text-gray-100">
        <p className="text-center mt-4">How to use the viewer?</p>
        <div className="p-2 text flex mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
              />
            </svg>
          </div>{" "}
          Activate snipping tool and Double click anywhere on the model to
          create a Clipper Plane!
        </div>
        <div className="p-2 text flex">
          <RulerIcon className="mr-2" /> Activate dimensions tool and click
          anywhere on the model to create a dimension!
        </div>
        <div className="p-2 text flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>{" "}
          Activate explode tool to see exploded model!
        </div>
        <div className="p-2 text flex">
          <Grid4x4OutlinedIcon className="mr-2" /> Use the grid tool to manage
          visibility of the grid!
        </div>
        <div className="p-2 text flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>{" "}
          Use hider tool to hide dimensions!
        </div>
      </div>
      
      <div className="mt-8 text text-xs">This viewer was based on openbim-components v0.0.39</div>
    </>
  );
};
