import { FC } from "react";
import { useAppContext } from "../../../middleware/ContextProvider";
import { Navigate } from "react-router-dom";

export const ModelListMenu: FC = () => {
  const [{ building, user }, dispatch] = useAppContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!building) {
    throw new Error("Error: building not found!");
  }

  const onUploadModel = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.visibility = "hidden";
    document.body.appendChild(input);

    input.click();

    input.onchange = () => {
      console.log(input.files);
      if (input.files && input.files.length) {
        const file = input.files[0];
        const newBuilding = { ...building };
        const { name } = file;
        const id = `${file.name} - ${performance.now()}`;
        const model = { name, id };
        newBuilding.models.push(model);
        dispatch({
          type: "UPLOAD_MODEL",
          payload: {
            model,
            file,
            building: newBuilding,
          },
        });
      }
      input.remove();
    };
  };

  const onDeleteModel = (id: string) => {
    const newBuilding = { ...building };
    const model = newBuilding.models.find((model) => model.id === id);

    if (!model) throw new Error("Model not found!");
    newBuilding.models = newBuilding.models.filter((model) => model.id !== id);
    dispatch({
      type: "DELETE_MODEL",
      payload: { model, building: newBuilding },
    });
  };

  return (
    <div className="bg-secondary-100 p-1">
      {building.models?.length ? (
        building.models.map((model) => (
          <div key={model.id} className="flex items-center  mt-5 text-xs">
            <button onClick={() => onDeleteModel(model.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2 hover:text-danger"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </button>
            <p className="ml-2">{model.name}</p>
          </div>
        ))
      ) : (
        <div>No models here yet!</div>
      )}
      <div className="flex justify-center mt-5 text-xs m-2">
        <button
          onClick={onUploadModel}
          className="
        flex inline-block rounded border-2 border px-6 pb-[6px] pt-2 text-xs
          font-medium uppercase leading-normal text-primary border-white
          transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white-100 
          focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 pb-1 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          Upload model
        </button>
      </div>
    </div>
  );
};
