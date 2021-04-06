import { useEffect } from "react";
import { useSelector } from "react-redux";

import AddNewTask from "./AddNewTask/AddNewTask";
import { getTaskList } from "./AddNewTask/AddNewTaskSlice";
import Task from "./Task";

function TaskList() {
  const taskList = useSelector(getTaskList);

  const buildTaskList = () => {
    if (taskList) {
      return taskList.map((task, index) => <Task task={task} key={index} />);
    }
  };

  return (
    <div class="flex-auto px-2">
      <div class="header bg-white shadow">
        <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 text-center">Tasks</h1>
        </div>
      </div>
      <div class="divide-y">{buildTaskList()}</div>
      <br />
      {AddNewTask()}
    </div>
  );
}

export default TaskList;
