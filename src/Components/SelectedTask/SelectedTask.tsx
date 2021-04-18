import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";

import { TaskStatus } from "../Task/TaskInterface";
import TextareaAutosize from "react-textarea-autosize";

import {
  getSelectedTask,
  getSelectedTaskId,
  selectTask,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
} from "../TaskList/TaskListSlice";
import PrioritySelect from "./PrioritySelect";
/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function SelectedTask() {
  const selectedTaskId = useSelector(getSelectedTaskId);
  const dispatch = useAppDispatch();

  const updateTaskName = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

  const taskSubsectionHeader = (subsectionHeader: string) => {
    return <div className="pt-1 font-bold">{subsectionHeader}</div>;
  };

  return (
    <div className="flex flex-shrink-0 flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4 z-10">
      <div id="selectedTaskPane" className="divide-y divide-gray-700">
        {/* Task Name */}
        <div className="inline">
          {closeSelectedTaskButton()}
          <TextareaAutosize
            className="w-full border border-gray-600 rounded-md my-1 px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none h-auto"
            id="selectedTaskName"
            value={selectedTask.task}
            placeholder="Empty task text"
            onChange={(e) => updateTaskName(e)}
          />
        </div>
        {/* Button Group */}
        <div className="w-full pb-2">
          {taskSubsectionHeader("Task Status")}
          <div className="flex flex-row">
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
        </div>
        {/* Tags */}
        <div className="w-full pb-2">{taskSubsectionHeader("Tags")}</div>
        {/* Priority */}
        <div className="w-full pb-2">
          {taskSubsectionHeader("Priority")}
          {PrioritySelect()}
        </div>
        {/* Note */}
        <div className="w-full">
          {taskSubsectionHeader("Task Note")}
          <textarea
            className="w-full border border-gray-600 rounded-md my-1 resize-y px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none"
            placeholder="Note"
            id="selectedTaskNote"
            value={selectedTask.note}
            onChange={(e) => updateTaskNote(e)}
          ></textarea>
        </div>
        {/* Dates */}
        <div className="py-2">
          {taskSubsectionHeader("Task Dates")}
          <div id="selectedTaskCreated">
            <div className="inline font-bold">Created: </div>
            {styleDates(selectedTask.created)}
          </div>
          <div id="selectedTaskModified">
            <div className="inline font-bold">Modified: </div>
            {styleDates(selectedTask.modified)}
          </div>
          <div id="selectedTaskCompleted">
            <div className="inline font-bold">Completed: </div>
            {styleDates(selectedTask.completed)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedTask;
