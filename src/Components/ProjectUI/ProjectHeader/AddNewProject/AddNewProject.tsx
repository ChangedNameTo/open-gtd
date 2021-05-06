import React, { ChangeEvent, Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

import { addProject } from "../../ProjectList/ProjectListSlice";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "../../../../hooks";

function AddNewProject() {
  const [projectText, setProjectText] = useState("");

  const dispatch = useAppDispatch();

  const createNewProject = () => {
    dispatch(addProject(projectText.trim()));
    setProjectText("");
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      createNewProject();
    }
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 ml-3"
          >
            Add New Project
          </Disclosure.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-75"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel static>
              <div className="flex flex-row relative order-2">
                <input
                  className="ml-4 px-4 border border-purple-500 rounded-md font-medium text-sm shadow-sm focus:ring-purple-500 focus:outline-none text-black"
                  type="text"
                  id="addTaskInput"
                  placeholder="Enter new project"
                  value={projectText}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setProjectText(e.target.value)
                  }
                  onKeyDown={(e) => {
                    onEnterPress(e);
                    open = false;
                  }}
                />
                <button
                  className="absolute inset-y-0 right-0 pl-3 pr-3 flex items-center bg-purple-500 rounded rounded-l-none"
                  id="submitNewProjectButton"
                  onClick={() => {
                    createNewProject();
                    open = false;
                  }}
                >
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default AddNewProject;
