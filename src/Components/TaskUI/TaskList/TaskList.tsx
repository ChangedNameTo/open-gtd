import { useSelector } from "react-redux";
import { Fragment } from "react";
import { getTasks } from "./TaskListSlice";
import TinyTask from "../Task/TinyTask";
import Task from "../Task/Task";
import { getFilters } from "../TaskListFilter/TaskFilterSlice";

/**
 * Creates the Task Rows for the main task UI.
 * @returns {FunctionComponent}
 */
function TaskList(projectId: string | null) {
  const taskList = useSelector(getTasks);
  const taskListFilters = useSelector(getFilters);

  const getTaskById = (taskId: string) => taskList.byId[taskId];

  const hasNoteFilter = (taskId: string) => {
    if (taskListFilters.hasNote) {
      return getTaskById(taskId).note !== "";
    } else if (taskListFilters.hasNote === false) {
      return getTaskById(taskId).note === "";
    } else {
      return true;
    }
  };

  const priorityFilter = (taskId: string) => {
    if (taskListFilters.priority) {
      return taskListFilters.priority === getTaskById(taskId).priority;
    } else {
      return true;
    }
  };

  const completionFilter = (taskId: string) => {
    if (taskListFilters.completion) {
      return taskListFilters.completion === getTaskById(taskId).status;
    } else {
      return true;
    }
  };

  const archivedFilter = (taskId: string) => {
    return getTaskById(taskId).archived === null;
  };

  const inSelectedProjectFilter = (taskId: string) => {
    if (projectId) {
      return getTaskById(taskId).project === projectId;
    } else {
      return true;
    }
  };

  const buildTinyTaskList = () => {
    if (taskList.allIds) {
      return taskList.allIds
        .filter(completionFilter)
        .filter(priorityFilter)
        .filter(hasNoteFilter)
        .filter(archivedFilter)
        .filter(inSelectedProjectFilter)
        .map((taskId, index) => {
          return <TinyTask taskId={taskId} key={index} />;
        });
    }
  };

  const buildTaskList = () => {
    if (taskList.allIds) {
      return taskList.allIds
        .filter(completionFilter)
        .filter(priorityFilter)
        .filter(hasNoteFilter)
        .filter(archivedFilter)
        .filter(inSelectedProjectFilter)
        .map((taskId, index) => {
          return <Task taskId={taskId} key={index} />;
        });
    }
  };

  return (
    <Fragment>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Projects
          </h2>
        </div>
        <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {buildTinyTaskList()}
        </ul>
      </div>
      {/* Projects table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full" id="taskList">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Task</span>
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Project</span>
                </th>
                <th className="px-12 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Defer Date
                </th>
                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {buildTaskList()}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default TaskList;
