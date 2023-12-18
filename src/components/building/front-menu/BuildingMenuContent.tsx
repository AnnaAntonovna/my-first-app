import { FC } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";
import { FrontMenuMode } from "./BuildingMenu";
import { Form } from "react-router-dom";

export const BuildingInfoMenu: FC<{
  onToggleMenu: (active: boolean) => void;
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext();

  const { building } = state;
  console.log("We're inside BuildingInfoMenu");

  if (!building) {
    throw new Error("No building active!");
  }

  const onUpdateBuilding = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newBuilding = { ...building } as any;
    newBuilding.name = data.get("building-name") || building.name;
    newBuilding.lng = data.get("building-lng") || building.lng;
    newBuilding.lat = data.get("building-lat") || building.lat;

    dispatch({ type: "UPDATE_BUILDING", payload: newBuilding });
    onToggleMenu(false); ///???
  };

  console.log("Context");
  return (
    <form className="bg-secondary-100" onSubmit={onUpdateBuilding}>
      This is the building info
      <div className="">
        <div className="flex items-center justify-between mt-5 text-xs">
          ID:
          <input
            type="text"
            className="text-xs text-right w-full"
            name="building-id"
            id="building-id"
            autoComplete="building-id"
            defaultValue={building.uid}
            disabled={true}
          ></input>
        </div>

        <div className="flex items-center justify-between mt-5 text-xs">
          Building name:
          <input
            type="text"
            className="text-xs text-right w-full"
            name="building-name"
            id="building-name"
            autoComplete="building-name"
            defaultValue={building.name}
          ></input>
        </div>

        <div className="flex items-center justify-between mt-5 text-xs">
          Longitude:
          <input
            type="text"
            className="ml-5 text-xs text-right w-full"
            name="building-lng"
            id="building-lng"
            autoComplete="building-lng"
            defaultValue={building.lng}
          ></input>
        </div>

        <div className="flex items-center justify-between mt-5 text-xs">
          Latitude:
          <input
            type="text"
            className="ml-5 text-xs text-right w-full"
            name="building-lat"
            id="building-lat"
            autoComplete="building-lat"
            defaultValue={building.lat}
          ></input>
        </div>
        <div className="flex pt-8 pb-3 items-center justify-center">
          <button className="
          flex inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs
            font-medium uppercase leading-normal text-primary border-white
            transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white-100 
            focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            
           type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
            Update building!
          </button>
        </div>
      </div>
    </form>
  );
};
