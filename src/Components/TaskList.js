import { useEffect } from "react";
import { useSelector } from "react-redux";

import AddNewTask from "./AddNewTask/AddNewTask";
import { getTaskList } from "./AddNewTask/AddNewTaskSlice";
import Task from "./Task";

function TaskList() {
  const tasks = useSelector(getTaskList);

  const taskList = () => {
    if (tasks) {
      return tasks.map((task) => <Task task={task} />);
    }
  };

  return (
    <div class="flex-auto px-2">
      <div class="header bg-white shadow">
        <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 text-center">Tasks</h1>
        </div>
      </div>
      <div class="divide-y">{taskList()}</div>
      <br />
      {AddNewTask()}
    </div>
  );
}

export default TaskList;
