import { Fragment, useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { addTask } from "./AddNewTaskSlice";

function AddNewTask() {
  const [visible, setVisible] = useState(false);
  const [taskText, setTaskText] = useState(null);

  const dispatch = useDispatch();

  const toggleVisible = () => setVisible(!visible);

  const submitIcon = () => {
    return (
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div>
          <FaCheckCircle />
        </div>
      </IconContext.Provider>
    );
  };

  const createNewTask = () => {
    dispatch(addTask(taskText));
  };

  return (
    <Fragment>
      <div class="space-y-2">
        <button
          class="w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600"
          onClick={() => toggleVisible()}
        >
          Add New Task
        </button>
        <div class="group flex flex-row ">
          <input
            type="text"
            className="task"
            class="rounded-md rounded-r-none w-full border border-green-100 group-focus:border-green-200 group-focus:ring-green-200"
            placeholder="Enter new task"
            onChange={(e) => setTaskText(e.target.value)}
          />
          <span class="flex items-center bg-green-600 rounded rounded-l-none border-0 px-3 hover:bg-green-500">
            <button class="focus:outline-none" onClick={() => createNewTask()}>
              {submitIcon()}
            </button>
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default AddNewTask;
