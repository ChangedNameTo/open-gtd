import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChevronRightIcon } from "@heroicons/react/solid";

/**
 * Creates a task object for display.
 * @param props {Object} Contains the Task object that users will click on. This is the basic unit of all of open-gtd.
 * @returns {FunctionComponent}
 */
function TinyTask(props: { taskId: string }) {
  const task = useSelector(
    (state: RootState) => state.tasks.taskList.byId[props.taskId]
  );

  return (
    <li key={props.taskId}>
      <div className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6 cursor-pointer">
        <span className="flex items-center truncate space-x-3">
          <span
            className={"w-2.5 h-2.5 flex-shrink-0 rounded-full"}
            aria-hidden="true"
          />
          <span className="font-medium truncate text-sm leading-6">
            {task.task}
          </span>
        </span>
        <ChevronRightIcon
          className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 flex-shrink-0"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}

export default TinyTask;
