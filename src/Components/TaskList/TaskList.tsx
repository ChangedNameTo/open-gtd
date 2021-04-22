import { useSelector } from "react-redux";

import AddNewTask from "../AddNewTask/AddNewTask";
import { getTasks } from "./TaskListSlice";
import TaskRow from "../Task/Task";
import TaskListFilters from "../TaskListFilters/TaskListFilters";
import { getFilters } from "../TaskListFilters/TaskFilterSlice";

/**
 * Creates the Task Rows for the main task UI.
 * @returns {FunctionComponent}
 */
function TaskRowDisplay() {
  const taskList = useSelector(getTasks);
  const taskListFilters = useSelector(getFilters);

  const getTaskById = (taskId: string) => taskList.byId[taskId];

  const completionFilter = (taskId: string) => {
    return taskListFilters.completion === getTaskById(taskId).status;
  };

  const buildTaskList = () => {
    if (taskList.allIds) {
      return taskList.allIds.filter(completionFilter).map((taskId, index) => {
        return <TaskRow taskId={taskId} key={index} />;
      });
    }
  };

  return (
    <div className="flex flex-col px-2 flex-1">
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
      {TaskListFilters()}
    </div>
  );
}

export default TaskRowDisplay;
