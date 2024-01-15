import { FC } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";
import { AnimatePresence } from "framer-motion";

export const BuildingTopbar: FC<{
  sideOpen: boolean;
  rightOpen: boolean;
  onOpen: () => void;
  onRightOpen: () => void;
}> = (props) => {
  const { sideOpen: leftSideOpen, onOpen, rightOpen, onRightOpen } = props;

  const [state, dispatch] = useAppContext();
  const onCloseBuilding = () => {
    dispatch({ type: "CLOSE_BUILDING" });
  };

  return (
    <>
      <AnimatePresence>
        <div className="p-5 z-30 text-white bg-primary-100 flex justify-between items-center w-screen">
          <div className="flex z-30">
            {!leftSideOpen && (
              <button
                onClick={onOpen}
                className="flex px-6 pb-[6px] pt-2 text-xs rounded-md
              text-xs text-primary border-white text-primary border-2
              transition duration-150 ease-in-out
              hover:bg-primary hover:border-primary hover:text-white-100
              focus:bg-white focus:text-primary"
              >
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
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
              </button>
            )}
            {leftSideOpen && (
              <button
                onClick={onOpen}
                className="flex px-6 pb-[6px] pt-2 text-xs rounded-md 
              bg-white text-primary border-2 border-white
              transition duration-150 ease-in-out
              hover:bg-primary hover:border-primary hover:text-white-100"
              >
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
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={onCloseBuilding}
              className="ml-6 flex inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs
            font-medium uppercase leading-normal text-primary border-white
            transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white-100 
            focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Back to the map
            </button>
            <div className="ml-10 text-xl pt-1"></div>
          </div>
          {rightOpen && (
            <button
              onClick={onRightOpen}
              className="flex px-6 pb-[6px] pt-2 text-xs rounded-md 
              bg-white text-primary border-2 border-white
              transition duration-150 ease-in-out
              hover:bg-primary hover:border-primary hover:text-white-100
              rotate-180 xxs:hidden xs:block"
            >
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          )}
          {!rightOpen && (
            <button
              onClick={onRightOpen}
              className="flex px-6 pb-[6px] pt-2 text-xs rounded-md
              text-xs text-primary border-white text-primary border-2
              transition duration-150 ease-in-out
              hover:bg-primary hover:border-primary hover:text-white-100
              focus:bg-white focus:text-primary xxs:hidden xs:block"
            >
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};
