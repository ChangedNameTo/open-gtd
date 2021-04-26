import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { TaskStatus } from "../Task/TaskInterface";
import TextareaAutosize from "react-textarea-autosize";

import {
  getSelectedTask,
  getSelectedTaskId,
  selectTask,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
  updateTaskTaskDeferDate,
  updateTaskTaskDueDate,
} from "../TaskList/TaskListSlice";
import PrioritySelect from "./PrioritySelect";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
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

  const updateTaskDeferDate = (e: Date) => {
    const newDate = e ? e.getTime() : null;
    dispatch(
      updateTaskTaskDeferDate({ newDate: newDate, taskId: selectedTaskId })
    );
  };

  const updateTaskDueDate = (e: Date) => {
    const newDate = e ? e.getTime() : null;
    dispatch(
      updateTaskTaskDueDate({ newDate: newDate, taskId: selectedTaskId })
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

  const taskSubsectionHeader = (subsectionHeader: string) => {
    return <div className="pt-1 font-bold text-lg">{subsectionHeader}</div>;
  };

  const datepicker = (
    date: number | null,
    dateChangeFunction: Function,
    placeholderText: string
  ) => {
    const chosenDate = date ? new Date(date) : null;
    return (
      <DatePicker
        selected={chosenDate}
        onChange={(date) => dateChangeFunction(date)}
        isClearable
        placeholderText={placeholderText}
        dateFormat="MM/dd/yyyy"
        className="border rounded w-full"
        todayButton="Today"
        openToDate={new Date(Date.now())}
      />
    );
  };

  return (
    <div className="flex flex-shrink-0 flex-col px-2 bg-gray-200 rounded-l-xl shadow-xl py-1 min-h-full transition ease-in border-gray-300 w-1/4 z-10">
      <div id="selectedTaskPane" className="divide-y divide-gray-700">
        {/* Task Name */}
        <div className="inline">
          {closeSelectedTaskButton()}
          <TextareaAutosize
            className="w-full border border-gray-600 rounded-md my-1 px-1 hover:ring-2 hover:ring-gray-700 focus:outline-none h-auto font-medium"
            id="selectedTaskName"
            value={selectedTask.task}
            placeholder="Empty task text"
            onChange={(e) => updateTaskName(e)}
          />
        </div>
        {/* Button Group */}
        <div className="w-full pb-2">
          {taskSubsectionHeader("Task Status")}
          {ButtonGroup(
            selectedTask.status,
            updateTaskStatus,
            [TaskStatus.Active, TaskStatus.Complete, TaskStatus.Dropped],
            "selectedTask"
          )}
        </div>
        {/* Tags */}
        <div className="w-full pb-2">
          {taskSubsectionHeader("Tags")}
          Not Implemented
        </div>
        {/* Priority */}
        <div className="w-full pb-2">
          {taskSubsectionHeader("Priority")}
          {PrioritySelect(dispatch, selectedTaskId, selectedTask.priority)}
        </div>
        {/* Defer/Due Dates */}
        <div className="w-full">
          {taskSubsectionHeader("Defer / Due Dates")}
          <div className="w-full">
            {datepicker(
              selectedTask.deferDate,
              updateTaskDeferDate,
              "Defer Date"
            )}
          </div>
          <div className="w-full">
            {datepicker(selectedTask.dueDate, updateTaskDueDate, "Due Date")}
          </div>
        </div>
        {/* Note */}
        <div className="w-full">
          {taskSubsectionHeader("Task Note")}
          <TextareaAutosize
            className="w-full border border-gray-600 rounded-md my-1 resize-y px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none"
            placeholder="Note"
            id="selectedTaskNote"
            value={selectedTask.note}
            onChange={(e) => updateTaskNote(e)}
          />
        </div>
        {/* Dates */}
        <div className="w-full py-2">
          {taskSubsectionHeader("Task Dates")}
          <div>
            <div className="inline font-bold">Created: </div>
            <div id="selectedTaskCreated" className="inline">
              {styleDates(selectedTask.created)}
            </div>
          </div>
          <div>
            <div className="inline font-bold">Modified: </div>
            <div id="selectedTaskModified" className="inline">
              {styleDates(selectedTask.modified)}
            </div>
          </div>
          <div>
            <div className="inline font-bold">Completed: </div>
            <div id="selectedTaskCompleted" className="inline">
              {styleDates(selectedTask.completed)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedTask;
