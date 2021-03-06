import { Menu, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExportJSONModalOpen,
  getImportJSONModalOpen,
  setExportJSONModal,
  setImportJSONModal,
} from "../UICommunications/UICommunicationsSlice";

// @ts-ignore: Unreachable code error
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function UserProfileDropdown() {
  const exportOpen = useSelector(getExportJSONModalOpen);
  const importOpen = useSelector(getImportJSONModalOpen);
  const dispatch = useDispatch();

  const setExportOpen = () => {
    dispatch(setExportJSONModal(!exportOpen));
  };

  const setImportOpen = () => {
    dispatch(setImportJSONModal(!importOpen));
  };

  const userProfileDropdownLink = (
    linkText: string,
    open?: boolean,
    setOpen?: Function
  ) => {
    return (
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm w-full text-left"
              )}
              onClick={() => setOpen(!open)}
            >
              {linkText}
            </button>
          )}
        </Menu.Item>
      </div>
    );
  };

  return (
    <Menu as="div" className="px-3 mt-6 relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
              <span className="flex w-full justify-between items-center">
                <span className="flex min-w-0 items-center justify-between space-x-3">
                  <img
                    className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                    src="https://avatars.githubusercontent.com/u/9056294?s=400&u=ec70834818e3ea5d1423849ad4f8507d8deed970&v=4"
                    alt=""
                  />
                  <span className="flex-1 flex flex-col min-w-0">
                    <span className="text-gray-900 text-sm font-medium truncate">
                      Will Mitchell
                    </span>
                    <span className="text-gray-500 text-sm truncate">
                      @will_mitch
                    </span>
                  </span>
                </span>
                <SelectorIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="py-1">
                {userProfileDropdownLink("Settings - Does Nothing")}
              </div>
              <div className="py-1">
                {userProfileDropdownLink(
                  "Export JSON",
                  exportOpen,
                  setExportOpen
                )}
                {userProfileDropdownLink(
                  "Import JSON",
                  importOpen,
                  setImportOpen
                )}
              </div>
              <div className="py-1">
                {userProfileDropdownLink("Get desktop app - Does Nothing")}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default UserProfileDropdown;
