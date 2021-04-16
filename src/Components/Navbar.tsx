import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Returns the navbar component
 * @return {FunctionComponent}
 */
function navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-0.5">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0 py-1">
              <FontAwesomeIcon
                className="text-white"
                icon={["far", "check-circle"]}
                size="2x"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold">
                  Inbox
                </button>

                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-bold">
                  Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
