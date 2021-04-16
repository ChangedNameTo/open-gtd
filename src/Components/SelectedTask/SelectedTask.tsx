import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { TaskStatus } from "../Task/TaskInterface";

import {
  getSelectedTask,
  getSelectedTaskId,
  selectTask,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
} from "../TaskList/TaskListSlice";
/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function SelectedTask() {
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

  const updateTaskStatus = (status: TaskStatus) => {
    dispatch(
      updateTaskTaskStatus({ newStatus: status, taskId: selectedTaskId })
    );
  };

  const updateTaskNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateTaskTaskNote({ newNote: e.target.value, taskId: selectedTaskId })
    );
  };

  const selectedTask = useSelector(getSelectedTask);

  // Early returns here to avoid having the selected task stay open at all times
  if (selectedTaskId === "-1") {
    return;
  }

  const closeSelectedTaskButton = () => {
    return (
      <div className="float-left mt-1">
        <span
          className="fa-layers fa-fw fa-2x group my-1 cursor-pointer"
          id="closeSelectedTask"
          onClick={() => closeSelectedTask()}
        >
          <FontAwesomeIcon
            className="text-gray-300 group-hover:text-gray-400 group-hover:border-gray-600 group-hover:ring-2 group-hover:ring-gray-500 rounded-full"
            icon={["fas", "circle"]}
          />
          <FontAwesomeIcon
            className="text-gray-500 align-center group-hover:text-gray-600 pl-0.5"
            icon={["fas", "angle-right"]}
          />
        </span>
      </div>
    );
  };

  const styleDates = (date: number) => {
    if (date > 0) {
      return new Date(date).toLocaleString("en-us");
    } else {
      return "N/A";
    }
  };

  const buttonIsActive = (status: TaskStatus) => {
    if (selectedTask.status === status) {
      return "text-bold bg-gray-700 text-gray-100 hover:text-gray-700 hover:bg-gray-300";
    } else {
      return "bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300";
    }
  };

  return (
    <div className="flex flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4">
      <div className="inline justify-center">
        {closeSelectedTaskButton()}
        <h1
          className="clear-right text-3xl font-bold text-center bg-white rounded-xl shadow-md flex-shrink w-min px-8 m-auto my-2"
          id="selectedTaskTitle"
        >
          {selectedTask.task}
        </h1>
      </div>
      <div id="selectedTaskPane" className="divide-y divide-gray-700">
        {/* Task Name */}
        <input
          className="w-full mb-2 rounded-md shadow-sm px-1 border border-gray-600 hover:ring-2 hover:ring-gray-600"
          id="selectedTaskName"
          value={selectedTask.task}
          onChange={(e) => updateTaskName(e)}
        ></input>
        {/* Button Group */}
        <div className="flex flex-row w-full py-2">
          <button
            className={`${buttonIsActive(
              TaskStatus.Active
            )} border border-gray-600 flex-auto rounded-l duration-200 ease-in-out transition focus:outline-none`}
            id="selectedTaskActiveButton"
            onClick={() => updateTaskStatus(TaskStatus.Active)}
          >
            Active
          </button>
          <button
            className={`${buttonIsActive(
              TaskStatus.Complete
            )} border border-gray-600 flex-auto duration-200 ease-in-out transition focus:outline-none`}
            id="selectedTaskCompletedButton"
            onClick={() => updateTaskStatus(TaskStatus.Complete)}
          >
            Complete
          </button>
          <button
            className={`${buttonIsActive(
              TaskStatus.Dropped
            )} border border-gray-600 flex-auto rounded-r duration-200 ease-in-out transition focus:outline-none`}
            id="selectedTaskDroppedButton"
            onClick={() => updateTaskStatus(TaskStatus.Dropped)}
          >
            Dropped
          </button>
        </div>
        {/* Note */}
        <div className="flex flex-row w-full">
          <div></div>
          <textarea
            className="w-full border border-gray-600 rounded-md my-2 resize-y px-1"
            placeholder="Note"
            id="selectedTaskNote"
            value={selectedTask.note}
            onChange={(e) => updateTaskNote(e)}
          ></textarea>
        </div>
        {/* Dates */}
        <div className="py-2">
          <div id="selectedTaskCreated">
            <b>Created:</b> {styleDates(selectedTask.created)}
          </div>
          <div id="selectedTaskModified">
            <b>Modified:</b> {styleDates(selectedTask.modified)}
          </div>
          <div id="selectedTaskCompleted">
            <b>Completed:</b> {styleDates(selectedTask.completed)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedTask;
