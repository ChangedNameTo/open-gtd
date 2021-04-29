import { ChangeEvent, useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Task, { TaskStatus } from "../Task/TaskInterface";
import TextareaAutosize from "react-textarea-autosize";
import { Transition, Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import {
  getSelectedTask,
  getSelectedTaskId,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
  updateTaskTaskDeferDate,
  updateTaskTaskDueDate,
} from "../TaskList/TaskListSlice";

import PrioritySelect from "./PrioritySelect";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function SelectedTask() {
  const selectedTaskId = useSelector(getSelectedTaskId);
  const selectedTask: Task | null = useSelector(getSelectedTask);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedTaskId !== "-1") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedTaskId]);

  const updateTaskName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateTaskTaskName({ newName: e.target.value, taskId: selectedTaskId })
    );
  };

  const updateTaskStatus = (status: TaskStatus) => {
    dispatch(
      updateTaskTaskStatus({ newStatus: status, taskId: selectedTaskId })
    );
  };

  const updateTaskNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateTaskTaskNote({ newNote: e.target.value, taskId: selectedTaskId })
    );
  };

  const updateTaskDeferDate = (e: Date) => {
    const newDate = e ? e.getTime() : null;
    dispatch(
      updateTaskTaskDeferDate({ newDate: newDate, taskId: selectedTaskId })
    );
  };

  const updateTaskDueDate = (e: Date) => {
    const newDate = e ? e.getTime() : null;
    dispatch(
      updateTaskTaskDueDate({ newDate: newDate, taskId: selectedTaskId })
    );
  };

  // Early returns here to avoid having the selected task stay open at all times
  if (
    selectedTask === undefined ||
    selectedTask === null ||
    selectedTaskId === null
  ) {
    return;
  }

  const styleDates = (date: number) => {
    if (date > 0) {
      return new Date(date).toLocaleString("en-us");
    } else {
      return "N/A";
    }
  };

  const taskSubsectionHeader = (subsectionHeader: string) => {
    return <div className="pt-1 font-bold text-lg">{subsectionHeader}</div>;
  };

  const datepicker = (
    date: number | null,
    dateChangeFunction: Function,
    placeholderText: string
  ) => {
    const chosenDate = date ? new Date(date) : null;
    return (
      <DatePicker
        selected={chosenDate}
        onChange={(date) => dateChangeFunction(date)}
        isClearable
        placeholderText={placeholderText}
        dateFormat="MM/dd/yyyy"
        className="border rounded w-full"
        todayButton="Today"
        openToDate={new Date(Date.now())}
      />
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="flex-grow text-lg font-medium text-gray-900">
                        <label
                          htmlFor="task"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="task"
                            name="task"
                            rows={4}
                            value={selectedTask.task}
                            onChange={(e) => updateTaskName(e)}
                            className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Empty Task Text"
                          />
                        </div>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      {/* Button Group */}
                      <div className="w-full pb-2">
                        {taskSubsectionHeader("Task Status")}
                        {ButtonGroup(
                          selectedTask.status,
                          updateTaskStatus,
                          [
                            TaskStatus.Active,
                            TaskStatus.Complete,
                            TaskStatus.Dropped,
                          ],
                          "selectedTask"
                        )}
                      </div>
                      {/* Tags */}
                      <div className="w-full pb-2">
                        {taskSubsectionHeader("Tags")}
                        Not Implemented
                      </div>
                      {/* Priority */}
                      <div className="w-full pb-2">
                        {taskSubsectionHeader("Priority")}
                        {PrioritySelect(
                          dispatch,
                          selectedTaskId,
                          selectedTask.priority
                        )}
                      </div>
                      {/* Defer/Due Dates */}
                      <div className="w-full">
                        {taskSubsectionHeader("Defer / Due Dates")}
                        <div className="w-full">
                          {datepicker(
                            selectedTask.deferDate,
                            updateTaskDeferDate,
                            "Defer Date"
                          )}
                        </div>
                        <div className="w-full">
                          {datepicker(
                            selectedTask.dueDate,
                            updateTaskDueDate,
                            "Due Date"
                          )}
                        </div>
                      </div>
                      {/* Note */}
                      <div className="w-full">
                        {taskSubsectionHeader("Task Note")}
                        <TextareaAutosize
                          className="w-full border border-gray-600 rounded-md my-1 resize-y px-1 hover:ring-2 hover:ring-gray-600 focus:outline-none"
                          placeholder="Note"
                          id="selectedTaskNote"
                          value={selectedTask.note}
                          onChange={(e) => updateTaskNote(e)}
                        />
                      </div>
                      {/* Dates */}
                      <div className="w-full py-2">
                        {taskSubsectionHeader("Task Dates")}
                        <div>
                          <div className="inline font-bold">Created: </div>
                          <div id="selectedTaskCreated" className="inline">
                            {styleDates(selectedTask.created)}
                          </div>
                        </div>
                        <div>
                          <div className="inline font-bold">Modified: </div>
                          <div id="selectedTaskModified" className="inline">
                            {styleDates(selectedTask.modified)}
                          </div>
                        </div>
                        <div>
                          <div className="inline font-bold">Completed: </div>
                          <div id="selectedTaskCompleted" className="inline">
                            {styleDates(selectedTask.completed)}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SelectedTask;
