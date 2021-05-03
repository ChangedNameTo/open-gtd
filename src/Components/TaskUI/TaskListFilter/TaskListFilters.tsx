import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";
import { addFilterPreset } from "../../TaskFilterPreset/TaskFilterPresetSlice";
import TaskListFilterSelect from "./TaskListFilterSelect";
import {
  getFilters,
  setCompletionFilter,
  setPriorityFilter,
  setHasNoteFilter,
  clearAllFilters,
} from "./TaskFilterSlice";

function TaskListFilters() {
  const dispatch = useAppDispatch();

  const currentFilters = useSelector(getFilters);

  const updateCompletionFilter = (status: TaskStatus) => {
    dispatch(setCompletionFilter(status));
  };

  const updatePriorityFilter = (status: TaskPriority) => {
    dispatch(setPriorityFilter(status));
  };

  const updateHasNoteFilter = (status: boolean) => {
    dispatch(setHasNoteFilter(status));
  };

  const saveClearAllFilters = () => {
    dispatch(clearAllFilters());
  };

  const saveNewTaskFilterPreset = () => {
    dispatch(addFilterPreset(currentFilters));
  };

  const filterDivClasses = () => {
    return "px-2 py-3 my-2 mx-2 md:mx-0 bg-white shadow rounded-lg";
  };

  return (
    <div className="border-t w-full mx-auto sm:px-1 lg:px-3 mt-8 bg-gray-100 grid md:grid-cols-4 md:gap-2 sm:grid-cols-1">
      <div className={filterDivClasses()}>
        {TaskListFilterSelect(
          currentFilters.completion,
          updateCompletionFilter,
          "Task Status",
          [TaskStatus.Active, TaskStatus.Complete, TaskStatus.Dropped, null]
        )}
      </div>
      <div className={filterDivClasses()}>
        {TaskListFilterSelect(
          currentFilters.priority,
          updatePriorityFilter,
          "Task Priority",
          [
            TaskPriority.None,
            TaskPriority.Low,
            TaskPriority.Medium,
            TaskPriority.High,
            TaskPriority.Immediate,
            null,
          ]
        )}
      </div>
      <div className={filterDivClasses()}>
        {TaskListFilterSelect(
          currentFilters.hasNote,
          updateHasNoteFilter,
          "Has Note?",
          [true, false, null]
        )}
      </div>
      <div className={filterDivClasses()}>
        <label className="block text-sm font-bold">Filter Actions</label>
        <div className="flex flex-row justify-center">
          <button
            className="ml-3 mt-1 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
            onClick={() => saveClearAllFilters()}
          >
            Clear All Filters
          </button>
          <button
            className="mt-1 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 ml-3"
            onClick={() => saveNewTaskFilterPreset()}
          >
            Save New Preset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskListFilters;
