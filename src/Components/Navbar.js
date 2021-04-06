import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h16">
            <div class="flex items-center">
              <div class="flex-shrink-0 py-1">
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <FaCheckCircle />
                  </div>
                </IconContext.Provider>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <button class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold">
                    Inbox
                  </button>

                  <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-bold">
                    Tasks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
