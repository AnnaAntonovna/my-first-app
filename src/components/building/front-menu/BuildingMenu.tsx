import { FC } from "react";
import { BuildingInfoMenu } from "./BuildingMenuContent";
import { FrontMenuMode } from '../types';
import { ModelListMenu } from "./ModelListMenu";

export const BuildingMenu: FC<{
  mode: FrontMenuMode;
  open: boolean;
  onToggleMenu: (active: boolean, mode?: FrontMenuMode) => void;
}> = ({ mode, open, onToggleMenu }) => {
  if (!open) {
    console.log("Empty div - not open");
    return <></>;
  }

  const content = new Map<FrontMenuMode, any>();

  console.log("We are inside of the building menu");

  content.set("BuildingInfo", <BuildingInfoMenu onToggleMenu={onToggleMenu} />);
  content.set("ModelList", <ModelListMenu />);

  const titles = {
    BuildingInfo: "Building Information",
    ModelList: "Model List",
  };

  const title = titles[mode];

  return (
    <div className="bg-white border-r-4 border-b-4 border-solid border-primary-100 text-primary p-2 z-100 min-w-210 xscreen:w-full mscreen:w-360">
      <div
      className="flex items-center justify-between pt-6 pb-6 "
      >
        <h2>{title}</h2>
        <button onClick={() => onToggleMenu(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow flex-col">{content.get(mode)}</div>
    </div>
  );
};
