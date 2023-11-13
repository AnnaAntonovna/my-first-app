import { getSidebarTools } from "./SidebarTools";
import { useAppContext } from "../../../middleware/ContextProvider";
import React from 'react'

export const BuildingSidebar = () => {
    console.log("SidebarVisible");
  return (
    <div className="h-full flex flex-col bg-primary w-1/6 min-w-210">BuildingSidebar</div>
  )
}
