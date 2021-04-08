import {useSelector} from 'react-redux';

import AddNewTask from './AddNewTask/AddNewTask';
import {Task, getTaskList} from './AddNewTask/TaskListSlice';
import TaskRow from './Task';

/**
 * Creates the Task Rows for the main task UI.
 * @returns {FunctionComponent}
 */
function TaskRowDisplay() {
  const taskList = useSelector(getTaskList);

  const buildTaskList = () => {
    if (taskList) {
      return taskList.tasks.map((task: Task, index: number) => <TaskRow task={task} key={index} />);
    }
  };

  return (
    <div className="flex-auto px-2">
      <div className="header bg-white shadow">
        <div className="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Tasks</h1>
        </div>
      </div>
      <div 
        className="divide-y"
        id="taskList"
      >
        {buildTaskList()}
      </div>
      <br />
      {AddNewTask()}
    </div>
  );
}

export default TaskRowDisplay;
