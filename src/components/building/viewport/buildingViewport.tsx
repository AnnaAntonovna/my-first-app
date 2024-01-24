import { FC, useEffect, useRef } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";

export const BuildingViewport: FC = () => {
  const [{ user, building }, dispatch] = useAppContext();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && user) {
      dispatch({ type: "START_BUILDING", payload: { container, building } });
      //console.log("It should work");
    } else {
      console.log("Smth went wrong");
    }
  }, []);

  return <div className="w-screen h-screen bg-white" ref={containerRef}></div>;
};
