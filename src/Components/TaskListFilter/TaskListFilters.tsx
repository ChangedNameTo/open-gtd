import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";
import { addFilterPreset } from "../TaskFilterPreset/TaskFilterPresetSlice";
import {
  getFilters,
  setCompletionFilter,
  setPriorityFilter,
  setHasNoteFilter,
  clearAllFilters,
} from "./TaskFilterSlice";

function TaskListFilters() {
  const isInitialMount = useRef(true);

  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState("");

  const dispatch = useAppDispatch();

  const currentFilters = useSelector(getFilters);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!visible) {
        setTimeout(() => {
          setHidden("hidden");
        }, 250);
      } else {
        setTimeout(() => {
          setHidden("");
        }, 250);
      }
    }
  }, [visible]);

  const updateCompletionFilter = (status: TaskStatus) => {
    dispatch(setCompletionFilter(status));
  };

  const updatePriorityFilter = (status: TaskPriority) => {
    dispatch(setPriorityFilter(status));
  };

  const updateHasNoteFilter = (status: boolean) => {
    dispatch(setHasNoteFilter(status));
  };

  const updateClearAllFilters = () => {
    dispatch(clearAllFilters());
  };

  const saveNewTaskFilterPreset = () => {
    dispatch(addFilterPreset(currentFilters));
  };

  const buttonIsActive = () => {
    if (visible) {
      return "text-bold bg-gray-600 text-gray-100";
    } else {
      return "bg-gray-100 text-gray-600 hover:text-gray-600 hover:bg-gray-300";
    }
  };

  const toggleVisible = () => setVisible(!visible);

  const isHidden = () => {
    return hidden ? "hidden" : "";
  };

  const addFiltersDivClasses = () => {
    return visible ? "animate-fade-in-down" : "animate-fade-out-up";
  };

  return (
    <div className="py-2">
      <button
        className={`${buttonIsActive()} w-full items-center px-4 rounded-md shadow-m font-medium border-2 border-gray-600 focus:outline-none`}
        id="taskFilterButton"
        onClick={() => toggleVisible()}
      >
        Filter Tasks
      </button>
      <div className={`${addFiltersDivClasses()} ${isHidden()} flex flex-row`}>
        <div className="w-full shadow-lg rounded my-1 border border-gray-600 p-1">
          <div className="font-semibold text-center">Filters Visible</div>
          <div className="space-y-2">
            <div className="block">
              <div className="font-semibold">Priority Filter</div>
              {ButtonGroup(
                currentFilters.priority,
                updatePriorityFilter,
                [
                  null,
                  TaskPriority.None,
                  TaskPriority.Low,
                  TaskPriority.Medium,
                  TaskPriority.High,
                  TaskPriority.Immediate,
                ],
                "completionFilter"
              )}
            </div>
            <div className="block">
              <div className="font-semibold">Status Filter</div>
              <div>
                {ButtonGroup(
                  currentFilters.completion,
                  updateCompletionFilter,
                  [
                    null,
                    TaskStatus.Active,
                    TaskStatus.Complete,
                    TaskStatus.Dropped,
                  ],
                  "completionFilter"
                )}
              </div>
            </div>
            <div className="block">
              <div className="font-semibold">Tag Filter</div>
              Not Implemented
            </div>
            <div className="block">
              <div className="font-semibold">Note Filter</div>
              <div>
                {ButtonGroup(
                  currentFilters.hasNote,
                  updateHasNoteFilter,
                  [null, true, false],
                  "completionFilter"
                )}
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <button
                className="font-bold w-full border-2 border-red-600 bg-red-100 rounded text-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => updateClearAllFilters()}
              >
                Clear All Filters
              </button>
              <button
                className="font-bold w-full border-2 border-green-600 bg-green-100 rounded text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => saveNewTaskFilterPreset()}
              >
                Save as Task Filter Preset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskListFilters;
