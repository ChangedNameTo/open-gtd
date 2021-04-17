import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

  return (
    <div
      id={`taskId${props.taskId}`}
      className={`min-w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded my-0.5 px-1 subpixel-antialiased font-mono focus:ring-0 focus:border-transparent focus:outline-none truncate cursor-pointer`}
      onClick={(e) => setSelectTask(e)}
    >
      <div className="inline px-1 isolate">{taskCheckboxIcon()}</div>
      <div
        className={`${textColor()} inline-flex flex-1`}
        onClick={(e) => setSelectTask(e)}
      >
        {taskText()}
      </div>
    </div>
  );
}

export default TaskRow;
