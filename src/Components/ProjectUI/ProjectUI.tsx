import MobileSidebar from "../Sidebars/MobileSidebar";
import PinnedProjects from "../PinnedProjects/PinnedProjects";
import Sidebar from "../Sidebars/Sidebar";
import SelectedTask from "../TaskUI/SelectedTask/SelectedTask";
import SearchHeader from "../TaskUI/SearchHeader/SearchHeader";
import ProjectList from "./ProjectList/ProjectList";
import TopProjectHeader from "./ProjectHeader/TopProjectHeader";
import ExportState from "../UserProfileDropdown/ExportState";
import ImportState from "../UserProfileDropdown/ImportState";

function ProjectUI(sidebarOpen: boolean, setSidebarOpen: Function) {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Slideout sidebar for mobile */}
      {MobileSidebar(sidebarOpen, setSidebarOpen)}
      {/* Static sidebar for desktop */}
      {Sidebar(sidebarOpen, setSidebarOpen)}
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {SearchHeader(sidebarOpen, setSidebarOpen)}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          {TopProjectHeader()}
          {/* Pinned projects */}
          {PinnedProjects(null)}
          {/* Project List */}
          {ProjectList()}
        </main>
      </div>
      {SelectedTask()}
      {ExportState()}
      {ImportState()}
    </div>
  );
}

export default ProjectUI;
