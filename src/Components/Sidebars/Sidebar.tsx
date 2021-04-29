import UserProfileDropdown from "../UserProfileDropdown";
import { HomeIcon, SearchIcon } from "@heroicons/react/outline";

// @ts-ignore: Unreachable code error
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Tasks", href: "#", icon: HomeIcon, current: true },
];

const teams = [
  { name: "Doesn't Do Anything", href: "#", bgColorClass: "bg-indigo-500" },
];

/**
 * Returns the Sidebar component
 * @return {FunctionComponent}
 */
function Sidebar(sidebarOpen: boolean, setSidebarOpen: Function) {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
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
                {teams.map((team) => (
                  <a
                    key={team.name}
                    href={team.href}
                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span
                      className={classNames(
                        team.bgColorClass,
                        "w-2.5 h-2.5 mr-4 rounded-full"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{team.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
