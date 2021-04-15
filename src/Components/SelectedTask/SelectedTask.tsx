import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";

import {
  getSelectedTask,
  getSelectedTaskId,
  selectTask,
  updateTaskTaskName,
} from "../TaskList/TaskListSlice";
/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function SelectedTask() {
  const selectedTask = useSelector(getSelectedTask);
  const selectedTaskId = useSelector(getSelectedTaskId);
  const dispatch = useAppDispatch();

  const updateTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateTaskTaskName({ newName: e.target.value, taskId: selectedTaskId })
    );
  };

  const closeSelectedTask = () => {
    dispatch(selectTask("-1"));
  };

  // Early returns here to avoid having the selected task stay open at all times
  if (selectedTask.created === -1) {
    return;
  }

  return (
    <div className="flex flex-auto flex-col px-2 bg-gray-200 rounded-l-xl shadow-lg py-1 min-h-full transition ease-in border-gray-300">
      <div className="inline justify-center">
        <div className="float-left">
          <span
            className="fa-layers fa-fw fa-2x group my-1"
            onClick={() => closeSelectedTask()}
          >
            <FontAwesomeIcon
              className="text-gray-300 group-hover:text-gray-400"
              icon={["fas", "circle"]}
            />
            <FontAwesomeIcon
              className="text-gray-500 align-center group-hover:text-gray-600"
              icon={["fas", "angle-right"]}
            />
          </span>
        </div>
        <h1 className="clear-right text-3xl font-bold text-center bg-white rounded-xl shadow-sm flex-shrink w-min px-8 m-auto my-2">
          {selectedTask.task}
        </h1>
      </div>
      <div id="selectedTaskPane" className="divide-y">
        <input value={selectedTask.task} onChange={(e) => updateTaskName(e)} />
        <div>
          <b>Created:</b>
          {new Date(selectedTask.created).toLocaleString("en-us")}
          <br />
          <b>Completed:</b> {selectedTask.completed}
        </div>
      </div>
      <br />
    </div>
  );
}

export default SelectedTask;
