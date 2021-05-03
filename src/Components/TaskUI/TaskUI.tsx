import PinnedProjects from "../PinnedProjects/PinnedProjects";
import TaskListFilters from "./TaskListFilter/TaskListFilters";
import SearchHeader from "./SearchHeader/SearchHeader";
import TaskList from "./TaskList/TaskList";
import SelectedTask from "./SelectedTask/SelectedTask";
import MobileSidebar from "../Sidebars/MobileSidebar";
import Sidebar from "../Sidebars/Sidebar";
import TaskHeader from "./TasksHeader/TasksHeader";

function TaskUI(sidebarOpen: boolean, setSidebarOpen: Function) {
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
          {/* Page title & actions */}
          {TaskHeader()}
          {/* Pinned projects */}
          {PinnedProjects()}
          {/* Task Filters */}
          {TaskListFilters()}
          {/* Project List */}
          {TaskList()}
        </main>
      </div>
      {SelectedTask()}
    </div>
  );
}

export default TaskUI;
