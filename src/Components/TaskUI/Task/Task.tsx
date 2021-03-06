import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";
import { RootState } from "../../../store";
import { selectTask, updateTaskTaskStatus } from "../TaskList/TaskListSlice";
import { TaskStatus } from "./TaskInterface";
import {
  DuplicateIcon as DuplicateIconOutline,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

import { DuplicateIcon as DuplicateIconSolid } from "@heroicons/react/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Task(props: { taskId: string; projectId?: string }) {
  const dispatch = useAppDispatch();

  const task = useSelector(
    (state: RootState) => state.tasks.taskList.byId[props.taskId]
  );

  const setSelectTask = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>
  ) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    dispatch(selectTask(props.taskId));
  };

  const updateTaskStatus = (status: TaskStatus) => {
    dispatch(updateTaskTaskStatus({ newStatus: status, taskId: props.taskId }));
  };

  const taskText = () => (task.task ? task.task : "Empty task text");

  const projectName = useSelector((state: RootState) =>
    task.project ? state.projects.projectList.byId[task.project].project : null
  );

  const projectText = () => (task.project ? projectName : "-");

  const taskCheckboxIconColor = () => {
    const now = new Date();
    const dueDate = new Date(task.dueDate);
    const isToday = now.toDateString() === dueDate.toDateString();

    if (!task.dueDate) {
      // No data
      return "text-gray-300";
    }

    if (now > dueDate && !isToday) {
      // Overdue
      return "text-red-300";
    } else if (now < dueDate && !isToday) {
      // Due Future
      return "text-gray-300";
    } else {
      // Due Today
      return "text-yellow-300";
    }
  };

  const taskCheckboxIcon = () => {
    const classes = `${taskCheckboxIconColor()} mt-1 h-7 w-7 cursor-pointer`;
    if (task.status === TaskStatus.Active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => updateTaskStatus(TaskStatus.Complete)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            // d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            d="M 21 12 a 9 9 0 1 1 -18 0 a 9 9 0 0 1 18 0 z"
          />
        </svg>
      );
    } else if (task.status === TaskStatus.Complete) {
      return (
        <CheckCircleIcon
          className={classes}
          onClick={() => updateTaskStatus(TaskStatus.Active)}
        />
      );
    } else if (task.status === TaskStatus.Dropped) {
      return (
        <ExclamationCircleIcon
          className={classes}
          onClick={() => updateTaskStatus(TaskStatus.Active)}
        />
      );
    }
  };

  const noteIcon = () => {
    const classes =
      "w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full ";

    if (task.note) {
      return (
        <CopyToClipboard text={task.note}>
          <DuplicateIconSolid
            className={`${classes}hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled`}
          />
        </CopyToClipboard>
      );
    } else {
      return <DuplicateIconOutline className={`${classes}`} />;
    }
  };

  const priorityIcon = () => {
    return (
      <div
        className="inline rounded-xl border border-gray-500 px-2 py-0.5 text-gray-500"
        onClick={(e) => setSelectTask(e)}
      >
        {task.priority}
      </div>
    );
  };

  const formatTaskDates = (date: number | null) => {
    if (date && date > 0) {
      return new Date(date).toLocaleDateString("en-us");
    } else {
      return "-";
    }
  };

  return (
    <tr
      key={props.taskId}
      id={`taskId${props.taskId}`}
      onClick={(e) => setSelectTask(e)}
    >
      <td className="px-2 py-0.5 text-sm text-gray-500 font-medium">
        {taskCheckboxIcon()}
      </td>
      {/* Task Name */}
      <td
        className="px-2 py-0.5 max-w-0 w-2/3 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
        onClick={(e) => setSelectTask(e)}
      >
        <div className="flex items-center" onClick={(e) => setSelectTask(e)}>
          <div
            className={"flex-shrink-0 w-2.5 h-2.5 rounded-full"}
            aria-hidden="true"
          />
          <div
            className="truncate hover:text-gray-600 cursor-pointer"
            onClick={(e) => setSelectTask(e)}
          >
            {taskText()}
          </div>
        </div>
      </td>
      {/* Task Project Parent */}
      <td
        className="px-6 py-0.5 max-w-0 w-1/3 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
        onClick={(e) => setSelectTask(e)}
      >
        <div className="flex items-center" onClick={(e) => setSelectTask(e)}>
          <div
            className={"flex-shrink-0 w-2.5 h-2.5 rounded-full"}
            aria-hidden="true"
          />
          <div
            className="truncate hover:text-gray-600 cursor-pointer"
            onClick={(e) => setSelectTask(e)}
          >
            {projectText()}
          </div>
        </div>
      </td>
      {/* Priority */}
      <td className="py-0.5 text-sm text-gray-500 font-medium text-center">
        {priorityIcon()}
      </td>
      {/* Defer Date */}
      <td className="hidden md:table-cell px-6 py-0.5 whitespace-nowrap text-sm text-gray-500 text-right">
        {formatTaskDates(task.deferDate)}
      </td>
      {/* Due Date */}
      <td className="hidden md:table-cell px-6 py-0.5 whitespace-nowrap text-sm text-gray-500 text-right">
        {formatTaskDates(task.dueDate)}
      </td>
      {/* Options */}
      <td className="pr-6">
        <div className="relative flex justify-end items-center cursor-pointer">
          <span className="sr-only">Copy Note</span>
          {noteIcon()}
        </div>
      </td>
    </tr>
  );
}

export default Task;
