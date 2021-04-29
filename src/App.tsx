import { useState } from "react";

import TaskList from "./Components/TaskList/TaskList";
import SelectedTask from "./Components/SelectedTask/SelectedTask";
import Sidebar from "./Components/Sidebars/Sidebar";
import MobileSidebar from "./Components/Sidebars/MobileSidebar";
import SearchHeader from "./Components/SearchHeader/SearchHeader";
import TaskHeader from "./Components/TasksHeader/TasksHeader";
import PinnedProjects from "./Components/PinnedProjects/PinnedProjects";
import TaskListFilters from "./Components/TaskListFilter/TaskListFilters";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
