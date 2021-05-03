import { Fragment } from "react";
import Project from "../Project/Project";
import TinyProject from "../Project/TinyProject";

function ProjectList() {
  const projectList = { byId: {}, allIds: [] };

  const buildTinyProjectList = () => {
    if (projectList.allIds) {
      return projectList.allIds.map((projectId, index) => {
        return <TinyProject projectId={projectId} key={index} />;
      });
    }
  };

  const buildProjectList = () => {
    if (projectList.allIds) {
      return projectList.allIds.map((projectId, index) => {
        return <Project projectId={projectId} key={index} />;
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
          {buildTinyProjectList()}
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
              {buildProjectList()}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectList;
