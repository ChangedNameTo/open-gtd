import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { RootState } from "../../store";
import { selectTask } from "../TaskList/TaskListSlice";

/**
 * Creates a task object for display.
 * @param props {Object} Contains the Task object that users will click on. This is the basic unit of all of open-gtd.
 * @returns {FunctionComponent}
 */
function TaskRow(props: { taskId: string; key: number }) {
  const dispatch = useAppDispatch();
  const task = useSelector((state: RootState) => state.tasks.taskList.byId[props.taskId]);
  
  const setSelectTask = () => {
    dispatch(selectTask(props.key));
  };

  return (
    <div>
      <button
        className="w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded px-1 subpixel-antialiased font-mono"
        onClick={() => setSelectTask()}
      >
        {task.task}
      </button>
    </div>
  );
}

export default TaskRow;