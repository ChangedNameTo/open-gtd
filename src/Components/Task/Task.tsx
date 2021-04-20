import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
    if (task.note) {
      return (
        <FontAwesomeIcon
          className="text-gray-300 fa-lg mt-1"
          icon={["fas", "sticky-note"]}
          onClick={(e) => updateTaskNoteVisible(e)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="text-gray-300 fa-lg mt-1"
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

  return (
    <div
      id={`taskId${props.taskId}`}
      className={`min-w-full  hover:bg-gray-100 focus:bg-gray-200 px-1 font-mono focus:ring-0 focus:border-transparent focus:outline-none cursor-pointer`}
      onClick={(e) => setSelectTask(e)}
    >
      <div className="inline px-1">{taskCheckboxIcon()}</div>
      <div
        className={`${textColor()} inline break-words select-none`}
        onClick={(e) => setSelectTask(e)}
      >
        {taskText()}
      </div>
      <div className={`inline px-1 float-right`}>{noteIcon()}</div>
      <div
        className={`${isTaskNoteHidden()} text-gray-400 rounded pt-1`}
        onClick={(e) => setSelectTask(e)}
      >
        {task.note}
      </div>
    </div>
  );
}

export default TaskRow;
