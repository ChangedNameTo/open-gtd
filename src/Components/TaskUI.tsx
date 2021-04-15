import TaskRowDisplay from "./TaskList/TaskList";
import SelectedTask from "./SelectedTask/SelectedTask";
import Folders from "./Folders";

/**
 * This is the main task UI window pane. It contains the task list, folders, and task view.
 * @return {FunctionComponent}
 */
function taskUI() {
  return (
    <div className="flex space-x-2 py-2 h-full">
      {Folders()}
      {TaskRowDisplay()}
      {SelectedTask()}
    </div>
  );
}

export default taskUI;
