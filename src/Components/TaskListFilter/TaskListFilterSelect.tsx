import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function TaskListFilterSelect(
  currentFilterValue: any | null,
  updateFilterFunction: Function,
  filterLabel: string,
  optionArray: any[]
) {
  const handleBooleanValues = (filterValue: any) => {
    if (filterValue === true) {
      return "True";
    } else if (filterValue === false) {
      return "False";
    } else if (filterValue === null) {
      return "N/A";
    } else {
      return filterValue;
    }
  };

  return (
    <Listbox
      value={currentFilterValue}
      onChange={(e) => updateFilterFunction(e)}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-bold">
            {filterLabel}
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full max-w-1/6 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 md:py-2 sm:py-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {handleBooleanValues(currentFilterValue)}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-10 mt-1 w-1/4 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {optionArray.map((status) => (
                <Listbox.Option
                  key={status}
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-indigo-600" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
                    )
                  }
                  value={status}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {handleBooleanValues(status)}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}

export default TaskListFilterSelect;
