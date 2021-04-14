import TaskRowDisplay from "./TaskList/TaskList";
import SelectedTask from "./SelectedTask/SelectedTask";

/**
 * This is the main task UI window pane. It contains the task list, folders, and task view.
 * @return {FunctionComponent}
 */
function taskUI() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex space-x-2">
        <div className="flex-auto px-2">
          <div className="header bg-white shadow">
            <div className="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900 text-center">
                Folders
              </h1>
            </div>
          </div>
        </div>
        {TaskRowDisplay()}
        {SelectedTask()}
      </div>
    </div>
  );
}

export default taskUI;
