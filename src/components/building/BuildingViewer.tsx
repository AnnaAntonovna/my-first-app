import React, { FC, useState } from "react";
import { useAppContext } from "../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";
import { BuildingTopbar } from "./side-menu/BuildingTopbar";
import { BuildingSidebar } from "./side-menu/BuildingSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimationFast } from "../../config/motion";
import { BuildingProperties } from "./properties-bar/BuildingProperties";
import { BuildingMenu } from "./front-menu/BuildingMenu";
import { FrontMenuMode } from "./types";
import { BuildingViewport } from "./viewport/buildingViewport";
import { BuildingBottomMenu } from "./bottom-menu/BuildingBottomMenu";
import { Events } from "../../middleware/Events";

export const BuildingViewer: FC = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftActivated, setLeftActivated] = useState(false);
  const [rightActivated, setRightActivated] = useState(false);

  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMenu, setFrontMenu] = useState<FrontMenuMode>("BuildingInfo");

  const events = new Events();
  console.log('Events in BuildingViewer:', events); // Check if events is defined


  const [state, dispatch] = useAppContext();
  const { user, building } = state;
  const onSideOpen = () => {
    const active = !sideOpen;
    setSideOpen(active);
    setLeftActivated(true);
    console.log("OnOpen");
  };

  //alert(state.floorplans.length);

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
    return <Navigate to="/" />;
  }

  const onToggleMenuSidebar = () => {
    console.log("onToggleMenu");
  };
  const toggleFrontMenu = (active = !frontOpen, mode?: FrontMenuMode) => {
    console.log("onToggleMenuInfo");
    if (mode) {
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
      <div className="flex h-screen flex-col overflow-hidden relative">
        <div className="w-screen h-screen fixed top-0 left-0 right-0">
          <BuildingViewport />
        </div>
        <AnimatePresence>
          <motion.section className="z-20" {...slideAnimation("up")}>
            <div className="z-30">
            <BuildingTopbar
              sideOpen={sideOpen}
              onOpen={() => onSideOpen()}
              rightOpen={rightOpen}
              onRightOpen={onRightOpen}
            />
            </div>
          </motion.section>
          <div className="flex flex-grow">
            {sideOpen &&(
              <motion.section
                {...slideAnimation("left")}
                className={'bg-white transparent pt-5 border-r-4 border-none mscreen:border-solid  border-primary-100 flex flex-col z-20 w-360 mscreen:w-360 xs:w-full xxs:w-full ${frontOpen ? "hidden xxs:fixed xs:relative inset-0 border-solid border-primary-100 border-r-4" : "block"}'}
              >
                <div className="flex flex-col mscreen:w-360 xs:w-full xxs:w-full">
                  <BuildingSidebar open={true} onToggleMenu={toggleFrontMenu} />
                </div>
              </motion.section>
            )}

            {!sideOpen && leftActivated && (
              <motion.section
                animate={{ x: -200, opacity: 0 }}
                transition={{ delay: 0 }}
                className="flex flex-col p-5 border-r-4 border-primary-100 bord min-w-210 xscreen:w-full mscreen:w-360"
              >
                <motion.section
                  className="z-20"
                  animate={{ opacity: 0, contentVisibility: "hidden" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360">
                    <BuildingSidebar
                      open={true}
                      onToggleMenu={toggleFrontMenu}
                    />
                  </div>
                </motion.section>
              </motion.section>
            )}
            {sideOpen && frontOpen && (
            <motion.section
            {...slideAnimation("left")}
            className="z-20 w-360 mscreen:w-360 xs:w-full xxs:w-full h-80 xxs:h-screen xs:h-80"
            >
            <div className="z-30 h-80 xxs:h-screen xs:h-80 bg-white">
              <BuildingMenu
                onToggleMenu={toggleFrontMenu}
                open={frontOpen}
                mode={frontMenu}
              />
            </div>
            </motion.section>
            )}
            {!sideOpen && 
            <motion.section
            {...slideAnimation("down")}
            className="h-80 z-20 xxs:w-full mscreen:w-360 xs:w-360 h-80 xxs:h-screen xs:h-80 xxs:hidden mscreen:block"
          >
            <div className="z-20 h-80 -translate-x-full mscreen:-translate-x-full xxs:hidden mscreen:block xxs:h-screen xs:h-80 ">
              <BuildingMenu
                onToggleMenu={toggleFrontMenu}
                open={frontOpen}
                mode={frontMenu}
              />
            </div>
            </motion.section>
            }

            {rightOpen && (
              <motion.section
                {...slideAnimation("right")}
                className="border-none mscreen:border-solid border-l-4 border-primary-100 xxs:hidden xs:block bg-white transparent flex flex-col ml-auto z-20 min-w-210 xscreen:w-full mscreen:w-360"
              >
                <div className="ml-auto flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 p-5">
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
                className="flex-col ml-auto"
              >
                <motion.section
                  animate={{ opacity: 0, contentVisibility: "hidden" }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="ml-auto flex-grow flex flex-col min-w-210 xscreen:w-full mscreen:w-360 z-20 p-5">
                    <BuildingProperties
                      open={true}
                      onToggleMenu={onToggleProperties}
                    />
                  </div>
                </motion.section>
              </motion.section>
            )}
          </div>
          <div className="z-10">
            <BuildingBottomMenu />
            </div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-primary-100 text-xs text-end p-1 text-primary z-30"
          >
            Strategie Digitali srl
          </motion.div>
        
        </AnimatePresence>
      </div>
    </>
  );
};
