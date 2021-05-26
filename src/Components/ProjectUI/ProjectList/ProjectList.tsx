import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../TaskUI/TaskList/TaskListSlice";
import TinyProject from "../Project/TinyProject";
import { getProjects } from "./ProjectListSlice";
import { getFilters } from "../../TaskUI/TaskListFilter/TaskFilterSlice";
import Task from "../../TaskUI/Task/Task";
import { Link } from "react-router-dom";

function ProjectList() {
  const projectList = useSelector(getProjects);
  const taskList = useSelector(getTasks);
  const taskListFilters = useSelector(getFilters);

  const getTaskById = (taskId: string) => taskList.byId[taskId];

  const taskInProjectFilter = (projectId: string, taskId: string) => {
    return getTaskById(taskId).project === projectId;
  };

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

  const buildTinyProjectList = (project: string) => {
    if (projectList.allIds) {
      return projectList.allIds
        .filter(completionFilter)
        .filter(priorityFilter)
        .filter(hasNoteFilter)
        .filter(archivedFilter)
        .map((projectId, index) => {
          return <TinyProject projectId={projectId} key={index} />;
        });
    }
  };

  const sortFunction = (taskIdA: string, taskIdB: string) => {
    const taskA = getTaskById(taskIdA);
    const taskB = getTaskById(taskIdB);

    if (!taskA) {
      return -1;
    }
    if (!taskB) {
      return 1;
    }

    if (taskA.dueDate > taskB.dueDate) return 1;
    if (taskA.dueDate < taskB.dueDate) return -1;
    if (taskA.deferDate > taskB.deferDate) return 1;
    if (taskA.deferDate < taskB.deferDate) return -1;
    return 0;
  };

  const buildProjectTaskList = (project: string) => {
    const projectFilteredTaskIds = taskList.allIds.filter((task) =>
      taskInProjectFilter(project, task)
    );

    if (projectFilteredTaskIds.length > 0) {
      return projectFilteredTaskIds
        .filter(completionFilter)
        .filter(priorityFilter)
        .filter(hasNoteFilter)
        .filter(archivedFilter)
        .sort(sortFunction)
        .map((taskId, index) => {
          return <Task projectId={project} taskId={taskId} key={index} />;
        });
    } else {
      return (
        <tr>
          <td colSpan={7} className="text-gray-500 text-center">
            No tasks in project
          </td>
        </tr>
      );
    }
  };

  const tinyProjectSubTable = () => {
    return projectList.allIds.map((project) => {
      return (
        <ul
          key={project}
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {buildTinyProjectList(project)}
        </ul>
      );
    });
  };

  const projectSubTable = () => {
    return projectList.allIds.map((project) => {
      return (
        <div key={project}>
          <Link to={`/projects/${project}`}>
            <div className="bg-white px-4 py-5 border-t-2 mt-1 border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {projectList.byId[project].project}
              </h3>
            </div>
          </Link>
          <table className="min-w-full" id="taskList">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="py-3 px-2 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                <th className="px-2 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
              {buildProjectTaskList(project)}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <Fragment>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Projects
          </h2>
          {tinyProjectSubTable()}
        </div>
      </div>
      {/* Projects table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          {projectSubTable()}
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectList;
