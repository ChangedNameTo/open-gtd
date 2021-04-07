import {FaCheckCircle} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

/**
 * Returns the navbar component
 * @return {FunctionComponent}
 */
function navbar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h16">
            <div className="flex items-center">
              <div className="flex-shrink-0 py-1">
                <IconContext.Provider value={{color: 'white', size: '30px'}}>
                  <div>
                    <FaCheckCircle />
                  </div>
                </IconContext.Provider>
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
    </div>
  );
}

export default navbar;
