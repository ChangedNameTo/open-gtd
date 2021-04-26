import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { RootState } from "../../store";
import { selectTask, updateTaskTaskStatus } from "../TaskList/TaskListSlice";
import { TaskStatus } from "./TaskInterface";

/**
 * Creates a task object for display.
 * @param props {Object} Contains the Task object that users will click on. This is the basic unit of all of open-gtd.
 * @returns {FunctionComponent}
 */
function TaskRow(props: { taskId: string }) {
  const [taskNoteHidden, setTaskNoteHidden] = useState(true);

  const dispatch = useAppDispatch();

  const task = useSelector(
    (state: RootState) => state.tasks.taskList.byId[props.taskId]
  );

  const setSelectTask = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    dispatch(selectTask(props.taskId));
  };

  const updateTaskStatus = (status: TaskStatus) => {
    dispatch(updateTaskTaskStatus({ newStatus: status, taskId: props.taskId }));
  };

  const taskText = () => (task.task ? task.task : "Empty task text");

  const textColor = () => (task.task ? "" : "text-gray-300");

  const taskCheckboxIcon = () => {
    if (task.status === TaskStatus.Active) {
      return (
        <FontAwesomeIcon
          className="text-gray-300 fa-lg mt-1"
          icon={["far", "circle"]}
          onClick={() => updateTaskStatus(TaskStatus.Complete)}
        />
      );
    } else if (task.status === TaskStatus.Complete) {
      return (
        <FontAwesomeIcon
          className="text-gray-300 fa-lg mt-1"
          icon={["fas", "check-circle"]}
          onClick={() => updateTaskStatus(TaskStatus.Active)}
        />
      );
    } else if (task.status === TaskStatus.Dropped) {
      return (
        <FontAwesomeIcon
          className="text-gray-300 fa-lg mt-1"
          icon={["fas", "minus-circle"]}
          onClick={() => updateTaskStatus(TaskStatus.Active)}
        />
      );
    }
  };

  const noteIcon = () => {
    const classes = "text-gray-300 fa-lg mt-1 float-right";

    if (task.note) {
      return (
        <FontAwesomeIcon
          className={classes}
          icon={["fas", "sticky-note"]}
          onClick={(e) => updateTaskNoteVisible(e)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className={classes}
          icon={["far", "sticky-note"]}
          onClick={(e) => updateTaskNoteVisible(e)}
        />
      );
    }
  };

  const isTaskNoteHidden = () => {
    return taskNoteHidden ? "hidden" : "";
  };

  const updateTaskNoteVisible = (e: any) => {
    const target = e.target;
    const currentTarget = e.currentTarget;

    if (
      (target !== currentTarget && !currentTarget.contains(target)) ||
      !task.note
    ) {
      return;
    }
    setTaskNoteHidden(!taskNoteHidden);
  };

  const priorityIcon = () => {
    return (
      <div
        className="inline rounded-xl border border-gray-500 px-2 py-0.5 text-gray-500 float-center"
        onClick={(e) => setSelectTask(e)}
      >
        {task.priority}
      </div>
    );
  };

  const isBottomBorderHidden = () => {
    return taskNoteHidden ? "border-b" : "";
  };

  const tableRowStyles =
    "min-w-full  hover:bg-gray-100 focus:bg-gray-200 px-1 font-mono focus:ring-0 focus:border-transparent focus:outline-none cursor-pointer";

  const formatTaskDates = (date: number | null) => {
    if (date) {
      return new Date(date).toLocaleDateString("en-us");
    } else {
      return "-";
    }
  };

  return (
    <Fragment>
      <tr
        id={`taskId${props.taskId}`}
        className={`${tableRowStyles} ${isBottomBorderHidden()}`}
        onClick={(e) => setSelectTask(e)}
      >
        <td
          className="px-1 whitespace-nowrap"
          onClick={(e) => setSelectTask(e)}
        >
          {taskCheckboxIcon()}
        </td>
        <td
          className={`${textColor()} break-words select-none`}
          onClick={(e) => setSelectTask(e)}
        >
          {taskText()}
        </td>
        <td
          className="px-1 whitespace-nowrap pt-1"
          onClick={(e) => setSelectTask(e)}
        >
          {priorityIcon()}
        </td>
        <td
          className="px-1 whitespace-nowrap pt-1 text-gray-400"
          onClick={(e) => setSelectTask(e)}
        >
          {formatTaskDates(task.dueDate)}
        </td>
        <td className={`px-1`} onClick={(e) => setSelectTask(e)}>
          {noteIcon()}
        </td>
      </tr>
      <tr
        className={`${isTaskNoteHidden()} min-w-full text-gray-400 rounded pt-1 border-b`}
        onClick={(e) => setSelectTask(e)}
      >
        <td
          className={`${tableRowStyles}`}
          colSpan={5}
          onClick={(e) => setSelectTask(e)}
        >
          {task.note}
        </td>
      </tr>
    </Fragment>
  );
}

export default TaskRow;
