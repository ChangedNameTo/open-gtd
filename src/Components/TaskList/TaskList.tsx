import { useSelector } from "react-redux";

import AddNewTask from "../AddNewTask/AddNewTask";
import { getTaskIds } from "./TaskListSlice";
import TaskRow from "../Task/Task";

/**
 * Creates the Task Rows for the main task UI.
 * @returns {FunctionComponent}
 */
function TaskRowDisplay() {
  const taskList = useSelector(getTaskIds);

  const buildTaskList = () => {
    if (taskList) {
      return taskList.map((taskId, index) => {
        return <TaskRow taskId={taskId} key={index} />;
      });
    }
  };

  return (
    <div className="flex flex-col px-2 flex-shrink">
      <div className="header bg-white shadow">
        <div className="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Tasks
          </h1>
        </div>
      </div>
      <div className="divide-y divide-gray-300 flex-initial" id="taskList">
        {buildTaskList()}
      </div>
      <br />
      {AddNewTask()}
    </div>
  );
}

export default TaskRowDisplay;
