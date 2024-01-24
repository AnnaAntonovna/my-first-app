import { FC } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";
import { Floorplan } from "../../../types";

export const FloorplanMenu: FC = () => {
  const [state, dispatch] = useAppContext();

  console.log(state.floorplans);

  const onFloorplanSelected = (active: boolean, floorplan?: Floorplan) => {
    dispatch({ type: "TOGGLE_FLOORPLAN", payload: { active, floorplan } });
  };

  return (
    <div className="bg-secondary-100 p-1">
      {state.floorplans.map((plan) => (
        <div key={plan.name} className="">
          <button
            onClick={() => onFloorplanSelected(true, plan)}
            className=""
          >
            {plan.name}
          </button>
        </div>
      ))}
      <div key="exit" className="">
        <button
          onClick={() => onFloorplanSelected(false)}
          className=""
        >
          Exit
        </button>
      </div>
    </div>
  );
};
