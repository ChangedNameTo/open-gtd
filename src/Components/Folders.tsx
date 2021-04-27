import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks";
import {
  clearFilterPresets,
  getTaskFilterPresets,
} from "./TaskFilterPreset/TaskFilterPresetSlice";

function TaskFilterPresets() {
  const taskFilterPresets = useSelector(getTaskFilterPresets);
  const dispatch = useAppDispatch();

  const buildTaskFilterList = () => {
    if (taskFilterPresets.allIds) {
      return taskFilterPresets.allIds.map((taskFilterId, index) => {
        return <div key={index}>{taskFilterId}</div>;
      });
    }
  };

  const sendClearFilterPresets = () => {
    dispatch(clearFilterPresets());
  };

  return (
    <div className="flex flex-col flex-shrink-0 px-2 w-1/5">
      <div className="header bg-white shadow">
        <div className="mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Task Filter Presets
          </h1>
        </div>
      </div>
      <div>{buildTaskFilterList()}</div>
      <button
        onClick={() => sendClearFilterPresets()}
        className="font-bold w-full border-2 border-red-600 bg-red-100 rounded text-red-600 hover:bg-red-600 hover:text-white"
      >
        Clear Filter Presets
      </button>
    </div>
  );
}

export default TaskFilterPresets;
