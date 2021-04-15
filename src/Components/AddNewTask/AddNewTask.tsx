import { ChangeEvent, useEffect, useState, useRef } from "react";

import { addTask } from "../TaskList/TaskListSlice";
import { useAppDispatch } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Returns the AddNewTask Button, and the input it controls
 * @return {FunctionComponent}
 */
function AddNewTask() {
  const isInitialMount = useRef(true);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  const [taskText, setTaskText] = useState("");

  const dispatch = useAppDispatch();

  const toggleVisible = () => setVisible(!visible);

  const addTaskDivClasses = () => {
    return visible
      ? "animate-fade-in-down flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded"
      : "animate-fade-out-up flex flex-row focus-within:ring-green-500 focus-within:ring-2 rounded";
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!visible) {
        setTimeout(() => {
          setHidden("hidden");
        }, 500);
      } else {
        setTimeout(() => {
          setHidden("");
        }, 500);
      }
    }
  }, [visible]);

  const isHidden = () => {
    return hidden ? "hidden" : "";
  };

  const createNewTask = () => {
    dispatch(addTask(taskText));
    setTaskText("");
  };

  return (
    <div className="space-y-2">
      <button
        className="w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600 text-white bold active:ring-green-500 focus:outline-none"
        id="addTaskButton"
        onClick={() => toggleVisible()}
      >
        Add New Task
      </button>
      <div className={`${addTaskDivClasses()} ${isHidden()}`}>
        <input
          type="text"
          className="rounded-md rounded-r-none w-full border-green-100 focus:ring-0 focus:border-transparent"
          id="addTaskInput"
          placeholder="Enter new task"
          value={taskText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTaskText(e.target.value)
          }
        />
        <span className="flex items-center bg-green-600 rounded rounded-l-none border-0 px-3 hover:bg-green-500">
          <button
            className="focus:outline-none"
            id="submitNewTaskButton"
            onClick={() => createNewTask()}
          >
            <FontAwesomeIcon
              className="text-white py-auto"
              icon={["fas", "check-circle"]}
              size="2x"
            />
          </button>
        </span>
      </div>
    </div>
  );
}

export default AddNewTask;