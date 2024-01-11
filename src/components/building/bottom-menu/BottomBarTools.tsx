import React from "react";
import { State } from "../../../middleware/State";
import { Action } from "../../../middleware/Actions";
import { Tool } from "../../../types";
import RulerIcon from "@mui/icons-material/Straighten";

export function getBottomBarTools(
  state: State,
  dispatch: React.Dispatch<Action>
): Tool[] {

  const tools = [
    {
      name: "Clipping planes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 translate-x-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
          />
        </svg>
      ),
      active: false,
      action: (dispatch: any) => {
        console.log("Click!");
        const tool = findTool("Clipping planes");
        deactivateAllTools(dispatch, "Clipping planes");
        tool.active = !tool.active;
        dispatch({ type: "TOGGLE_CLIPPER", payload: tool.active });
      },
    },
    {
      name: "Dimensions",
      icon: <RulerIcon />,
      active: false,
      action: (dispatch: any) => {
        console.log("Click!");
        const tool = findTool("Dimensions");
        deactivateAllTools(dispatch, "Dimensions");
        tool.active = !tool.active;
        dispatch({ type: "TOGGLE_DIMENSIONS", payload: tool.active });
      },
    },
    {
      name: "Explosion",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 translate-x-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      active: false,
      action: (dispatch: any) => {
        console.log("Click!");
        const tool = findTool("Explosion");
        deactivateAllTools(dispatch, "Explosion");
        tool.active = !tool.active;
        console.log(tool.active);
        dispatch({ type: "EXPLODE_MODEL", payload: tool.active });
      },
    },
  ];

  const findTool = (name: string) => {
    const tool = tools.find((tool) => tool.name === name);
    if (!tool) throw new Error("Tool not found!");
    return tool;
  };

  const deactivateAllTools = (dispatch: any, name: string) => {
    for (const tool of tools) {
      if (tool.active && tool.name !== name) {
        tool.action(dispatch);
      }
    }
  };

  return tools;
}
