import PinnedProjects from "../PinnedProjects/PinnedProjects";
import TaskListFilters from "./TaskListFilter/TaskListFilters";
import SearchHeader from "./SearchHeader/SearchHeader";
import TaskList from "./TaskList/TaskList";
import SelectedTask from "./SelectedTask/SelectedTask";
import MobileSidebar from "../Sidebars/MobileSidebar";
import Sidebar from "../Sidebars/Sidebar";
import TaskHeader from "./TasksHeader/TasksHeader";
import TopTaskHeader from "./TasksHeader/TopTaskHeader";
import { useLocation } from "react-router";
import ExportState from "../UserProfileDropdown/ExportState";
import ImportState from "../UserProfileDropdown/ImportState";

function TaskUI(sidebarOpen: boolean, setSidebarOpen: Function) {
  const currentURL = useLocation().pathname;

  // If a project has been passed in, this should display the Projects task view, not the Inbox
  const projectId = currentURL ? currentURL.split("/")[2] : null;

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Slideout sidebar for mobile */}
      {MobileSidebar(sidebarOpen, setSidebarOpen)}
      {/* Static sidebar for desktop */}
      {Sidebar(sidebarOpen, setSidebarOpen)}
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Search header */}
        {SearchHeader(sidebarOpen, setSidebarOpen)}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {TopTaskHeader(projectId)}
          {/* Page title & actions */}
          {TaskHeader(projectId)}
          {/* Pinned projects */}
          {PinnedProjects(projectId)}
          {/* Task Filters */}
          {TaskListFilters()}
          {/* Project List */}
          {TaskList(projectId)}
        </main>
      </div>
      {SelectedTask()}
      {ExportState()}
      {ImportState()}
    </div>
  );
}

export default TaskUI;
