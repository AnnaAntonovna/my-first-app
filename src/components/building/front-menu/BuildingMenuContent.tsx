import { FC } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";
import { FrontMenuMode } from "./BuildingMenu";

export const BuildingInfoMenu: FC<{
    onToggleMenu: (active: boolean) => void;
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext();

  const { building } = state;
  console.log("We're inside BuildingInfoMenu");

  if (!building) {
    throw new Error("No building active!");
  }

  console.log("Context");
  return <div className="bg-primary">BuildingMenu</div>;
};
