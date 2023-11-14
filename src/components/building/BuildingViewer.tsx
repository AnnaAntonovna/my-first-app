import React, { FC, useState } from "react";
import { useAppContext } from "../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";
import { BuildingTopbar } from "./BuildingTopbar";
import { BuildingSidebar } from "./sidebar/BuildingSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../../config/motion";
import { BuildingProperties } from "./building-info-menu/BuildingProperties";

export const BuildingViewer: FC = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const [state, dispatch] = useAppContext();
  const { user, building } = state;
  const onSideOpen = () => {
    const active = !sideOpen;
    setSideOpen(active);
    console.log("OnOpen");
  };

  const onRightOpen = () => {
    const active = !rightOpen;
    setRightOpen(active);
    console.log("OnOpen");
  };

  if (!building) {
    return <Navigate to={"/map"} />;
  }

  const onToggleMenuSidebar = () => {
    console.log("onToggleMenu");
  };

  const onToggleProperties = () => {
    console.log("onToggleProperties");
  };

  return (
    <>
      <div className="md:flex h-screen flex-col overflow-hidden">
        <AnimatePresence>
          <motion.section {...slideAnimation("up")}>
            <BuildingTopbar
              sideOpen={sideOpen}
              onOpen={() => onSideOpen()}
              rightOpen={rightOpen}
              onRightOpen={onRightOpen}
            />
          </motion.section>
          <div className="flex flex-grow">
            {sideOpen && (
              <motion.section
                {...slideAnimation("left")}
                className="flex-grow flex flex-col"
              >
                <div className="flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 p-5 border-r-4 border-primary-100">
                  <BuildingSidebar
                    open={true}
                    onToggleMenu={onToggleMenuSidebar}
                  />
                </div>
              </motion.section>
            )}
            {rightOpen && (
              <motion.section
                {...slideAnimation("right")}
                className="flex-grow flex flex-col ml-auto"
              >
                <div className="ml-auto flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 p-5 border-l-4 border-primary-100">
                  <BuildingProperties
                    open={true}
                    onToggleMenu={onToggleProperties}
                  />
                </div>
              </motion.section>
            )}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};
