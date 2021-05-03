import { useState } from "react";

import Sidebar from "./Components/Sidebars/Sidebar";
import MobileSidebar from "./Components/Sidebars/MobileSidebar";
import { Switch, Route } from "react-router";
import TaskUI from "./Components/TaskUI/TaskUI";
import ProjectUI from "./Components/ProjectUI/ProjectUI";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        {TaskUI(sidebarOpen, setSidebarOpen)}
      </Route>
      <Route exact path="/projects">
        {ProjectUI(sidebarOpen, setSidebarOpen)}
      </Route>
      <Route path="/projects/:id">{TaskUI(sidebarOpen, setSidebarOpen)}</Route>
      <Route>
        <div className="h-screen flex overflow-hidden bg-white">
          {/* Slideout sidebar for mobile */}
          {MobileSidebar(sidebarOpen, setSidebarOpen)}
          {/* Static sidebar for desktop */}
          {Sidebar(sidebarOpen, setSidebarOpen)}
          {/* Main column */}
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              oops
            </main>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
