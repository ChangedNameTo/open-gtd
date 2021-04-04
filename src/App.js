import { Fragment, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import AddNewTask from "./Components/AddNewTask";

import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState(null);
  const [options, setOptions] = useState({ darkMode: false });

  const onTreeStateChange = (state) => console.log("tree state: ", state);

  const taskList = () => {
    if (tasks) {
      return tasks.map((task) => <Task task={task} />);
    }
  };

  return (
    <Fragment>
      <div>
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h16">
              <div class="flex items-center">
                <div class="flex-shrink-0 py-1">
                  <IconContext.Provider
                    value={{ color: "white", size: "30px" }}
                  >
                    <div>
                      <FaCheckCircle />
                    </div>
                  </IconContext.Provider>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <button class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Inbox
                    </button>

                    <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tasks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="flex space-x-2">
            <div class="flex-auto px-2">
              <header class="bg-white shadow">
                <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
                  <h1 class="text-3xl font-bold text-gray-900 text-center">
                    Folders
                  </h1>
                </div>
              </header>
            </div>
            <div class="flex-auto px-2">
              <header class="bg-white shadow">
                <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
                  <h1 class="text-3xl font-bold text-gray-900 text-center">
                    Tasks
                  </h1>
                </div>
              </header>
              <div class="divide-y">{taskList()}</div>
              <br />
              {AddNewTask()}
            </div>
            <div class="flex-auto px-2">
              <header class="bg-white shadow">
                <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
                  <h1 class="text-3xl font-bold text-gray-900 text-center">
                    Info
                  </h1>
                </div>
              </header>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
