import React, { FC, useState } from "react";
import { useAppContext } from "../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";
import { BuildingTopbar } from "./BuildingTopbar";
import { BuildingSidebar } from "./sidebar/BuildingSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimationFast } from "../../config/motion";
import { BuildingProperties } from "./properties-bar/BuildingProperties";
import { BuildingMenu, FrontMenuMode } from "./front-menu/BuildingMenu";

export const BuildingViewer: FC = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftActivated, setLeftActivated] = useState(false);
  const [rightActivated, setRightActivated] = useState(false);

  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMenu, setFrontMenu] = useState<FrontMenuMode>("BuildingInfo");

  const [state, dispatch] = useAppContext();
  const { user, building } = state;
  const onSideOpen = () => {
    const active = !sideOpen;
    setSideOpen(active);
    setLeftActivated(true);
    console.log("OnOpen");
  };

  const onRightOpen = () => {
    const active = !rightOpen;
    setRightOpen(active);
    setRightActivated(true);
    console.log("OnOpen");
  };

  if (!building) {
    return <Navigate to={"/map"} />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  const onToggleMenuSidebar = () => {
    console.log("onToggleMenu");
  };
  const toggleFrontMenu = (active = !frontOpen, mode?: FrontMenuMode) => {
    console.log("onToggleMenuInfo");
    if(mode) {
      setFrontMenu(mode);
      console.log("onToggleFrontMenu");
      console.log(mode);
    }
    setFrontOpen(active);
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
                    onToggleMenu={toggleFrontMenu}
                  />
                </div>
              </motion.section>
            )}
            {!sideOpen && leftActivated && (
              <motion.section
                animate={{ x: -200, opacity: 0 }}
                transition={{ delay: 0 }}
                className="flex-grow flex flex-col border-r-4 border-primary-100"
              >
                <motion.section
                  animate={{ opacity: 0, contentVisibility: "hidden" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 p-5 ">
                    <BuildingSidebar
                      open={true}
                      onToggleMenu={toggleFrontMenu}
                    />
                  </div>
                </motion.section>
              </motion.section>
            )}

            <div className="flex-grow w-screen">
              <BuildingMenu onToggleMenu={toggleFrontMenu} open={frontOpen} mode={frontMenu}/>
            </div>

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
            {!rightOpen && rightActivated && (
              <motion.section
                animate={{ x: 250, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0 }}
                className="flex-grow flex flex-col ml-auto"
              >
                <motion.section
                  animate={{ opacity: 0, contentVisibility: "hidden" }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="ml-auto flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 p-5 border-l-4 border-primary-100">
                    <BuildingProperties
                      open={true}
                      onToggleMenu={onToggleProperties}
                    />
                  </div>
                </motion.section>
              </motion.section>
            )}
          </div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-primary-100 text-xs text-end p-1 text-primary"
          >
            Strategie Digitali srl {building.uid}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};
