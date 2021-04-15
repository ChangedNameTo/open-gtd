import { useSelector } from "react-redux";

import { getSelectedTask } from "../TaskList/TaskListSlice";
/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function SelectedTask() {
  const selectedTask = useSelector(getSelectedTask);

  if (selectedTask.created === -1) {
    return;
  }
  return (
    <div className="flex flex-auto flex-col px-2 border-left bg-gray-200 rounded-l-xl shadow-lg py-2 min-h-full transition ease-in border-gray-300">
      <h1 className="place-self-center text-3xl font-bold text-center bg-white flex-shrink w-min px-8">
        {selectedTask.task}
      </h1>
      <div id="selectedTaskPane" className="divide-y">
        <div>
          <b>Created:</b>
          {new Date(selectedTask.created).toLocaleString("en-us")}
          <br />
          <b>Completed:</b> {selectedTask.completed}
        </div>
      </div>
      <br />
    </div>
  );
}

export default SelectedTask;
