import { useAppDispatch } from "../hooks";
import { selectTask } from "./AddNewTask/TaskListSlice";
/**
 * Creates a task object for display.
 * @param props {Object} Contains the Task object that users will click on. This is the basic unit of all of open-gtd.
 * @returns {FunctionComponent}
 */
function TaskRow(props: { task: Object; key: number }) {
  const dispatch = useAppDispatch();

  const setSelectTask = () => {
    dispatch(selectTask(props.key));
  };

  return (
    <div>
      <button
        className="w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded px-1 subpixel-antialiased font-mono"
        onClick={() => setSelectTask()}
      >
        {props.task.task}
      </button>
    </div>
  );
}

export default TaskRow;
