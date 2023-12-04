import { FC } from "react";
import { BuildingInfoMenu } from "./BuildingMenuContent";

export type FrontMenuMode = "BuildingInfo";

export const BuildingMenu: FC<{
  mode: FrontMenuMode;
  open: boolean;
  onToggleMenu: (active: boolean) => void;
}> = ({ mode, open, onToggleMenu }) => {

  if (!open) {
    console.log("Empty div - not open");
    return <></>;
  }

  const content = new Map<FrontMenuMode, any>();

  console.log("We are inside of the building menu");
  
  content.set("BuildingInfo", <BuildingInfoMenu onToggleMenu={onToggleMenu}/>);

  const titles = {
    BuildingInfo: "Building Information",
  };

  const title = titles[mode];

  return (
    <div className="bg-primary z-100">
      <h2>{title}</h2>
      <button onClick={() => onToggleMenu(false)}>close</button>
      <div>{content.get(mode)}</div>
    </div>
  );
};
