import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { TaskStatus } from "../Task/TaskInterface";
import { getFilters, setCompletionFilter } from "./TaskFilterSlice";

function TaskListFilters() {
  const isInitialMount = useRef(true);

  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState("hidden");

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

  const buttonIsActive = () => {
    if (visible) {
      return "text-bold bg-gray-700 text-gray-100";
    } else {
      return "bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300";
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
        className={`${buttonIsActive()} w-full items-center px-4 rounded-md shadow-m font-medium border-2 border-gray-600`}
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
              <div>
                {ButtonGroup(
                  currentFilters.completion,
                  updateCompletionFilter,
                  [TaskStatus.Active, TaskStatus.Complete, TaskStatus.Dropped],
                  "completionFilter"
                )}
              </div>
            </div>
            <div className="block font-semibold">Status Filter</div>
            <div className="block font-semibold">Tag Filter</div>
            <div className="block font-semibold">Note Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskListFilters;
