import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import {
  HomeIcon,
  SearchIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

import { useLocation } from "react-router-dom";
import NavLink from "../Sidebars/NavLink";
import SecondaryLink from "./SecondaryLink";

/**
 * Returns the Sidebar component
 * @return {FunctionComponent}
 */
function Sidebar(sidebarOpen: boolean, setSidebarOpen: Function) {
  const currentURL = useLocation().pathname;

  const section = currentURL ? currentURL.split("/")[1] : null;

  const isActive = (href: string) => (section ? section === href : false);

  const navigation = [
    {
      name: "Inbox",
      href: "/inbox",
      icon: HomeIcon,
      current: isActive("inbox"),
    },
    {
      name: "Projects",
      href: "/projects",
      icon: ClipboardListIcon,
      current: isActive("projects"),
    },
  ];

  const teams = [
    { name: "Doesn't Do Anything", href: "#", bgColorClass: "bg-indigo-500" },
  ];

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 bg-gray-100">
        <div className="flex items-center flex-shrink-0 px-6">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
            alt="Workflow"
          />
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          {/* User account dropdown */}
          {UserProfileDropdown()}
          {/* Sidebar Search */}
          <div className="px-3 mt-5">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <SearchIcon
                  className="mr-3 h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search"
              />
            </div>
          </div>
          {/* Navigation */}
          <nav className="px-3 mt-6">
            <div className="space-y-1">
              {navigation.map((item) => {
                return NavLink(item);
              })}
            </div>
            <div className="mt-8">
              {/* Secondary navigation */}
              <h3
                className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                id="teams-headline"
              >
                Teams
              </h3>
              <div
                className="mt-1 space-y-1"
                role="group"
                aria-labelledby="teams-headline"
              >
                {teams.map((team) => SecondaryLink(team))}
              </div>
            </div>
          </nav>
        </div>
        <div className="flex-shrink-0 bg-purple-700 p-4 divide-y">
          <a
            href="https://github.com/ChangedNameTo/open-gtd"
            className="flex-shrink-0 w-full group block"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">OpenGTD Github</p>
                <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                  Follow the Project
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
