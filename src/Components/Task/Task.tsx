import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { RootState } from "../../store";
import { selectTask } from "../TaskList/TaskListSlice";

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

  const setSelectTask = () => {
    dispatch(selectTask(props.taskId));
  };

  return (
    <div>
      <button
        id={`taskId${props.taskId}`}
        className="w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded my-0.5 px-1 subpixel-antialiased font-mono focus:ring-0 focus:border-transparent focus:outline-none truncate"
        onClick={() => setSelectTask()}
      >
        {task.task}
      </button>
    </div>
  );
}

export default TaskRow;
