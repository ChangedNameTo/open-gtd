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
  selectTask,
  archiveTask,
} from "../TaskList/TaskListSlice";

import PrioritySelect from "./PrioritySelect";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { TrashIcon } from "@heroicons/react/solid";
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
    if (selectedTaskId !== null) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedTaskId]);

  const clearSelectedTask = () => {
    dispatch(selectTask(null));
  };

  const deleteSelectedTask = (id: string) => {
    dispatch(archiveTask({ taskId: id }));
  };

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

  const styleDates = (date: number | null) => {
    if (date !== null && date > 0) {
      return new Date(date).toLocaleString("en-us");
    } else {
      return "N/A";
    }
  };

  const taskSubsectionHeader = (subsectionHeader: string, id: string) => {
    return (
      <label
        htmlFor={id}
        className="block text-lg font-medium text-gray-900 sm:mt-px sm:pt-2"
      >
        {subsectionHeader}
      </label>
    );
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
        className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        todayButton="Today"
        openToDate={new Date(Date.now())}
      />
    );
  };

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={clearSelectedTask}>
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
                    <div className="flex items-start justify-between border-b pb-2">
                      {/* Task Text */}
                      <Dialog.Title className="flex-grow text-lg font-medium text-gray-900">
                        <label
                          htmlFor="task"
                          className="block text-lg font-medium text-gray-700"
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
                      {/* Close Icon */}
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
                  <div className="relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6 divide-y space-y-2">
                      {/* Button Group */}
                      <div className="w-full">
                        {taskSubsectionHeader("Task Status", "taskStatus")}
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
                      <div className="w-full">
                        {taskSubsectionHeader("Tags", "tags")}
                        <div className="text-gray-500">Not Implemented</div>
                      </div>
                      {/* Priority */}
                      <div className="w-full">
                        {taskSubsectionHeader("Priority", "priority")}
                        {PrioritySelect(
                          dispatch,
                          selectedTaskId,
                          selectedTask.priority
                        )}
                      </div>
                      {/* Defer/Due Dates */}
                      <div className="w-full">
                        {taskSubsectionHeader("Defer/Due Dates", "duedates")}
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
                        {taskSubsectionHeader("Task Note", "taskNote")}
                        <TextareaAutosize
                          className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Empty Note"
                          id="selectedTaskNote"
                          value={selectedTask.note}
                          onChange={(e) => updateTaskNote(e)}
                        />
                      </div>
                      {/* Dates */}
                      <div className="w-full">
                        {taskSubsectionHeader("Task Dates", "taskDates")}
                        <div>
                          <div className="inline font-medium">Created: </div>
                          <div
                            id="selectedTaskCreated"
                            className="inline text-sm text-gray-900"
                          >
                            {styleDates(selectedTask.created)}
                          </div>
                        </div>
                        <div>
                          <div className="inline font-medium">Modified: </div>
                          <div
                            id="selectedTaskModified"
                            className="inline text-sm text-gray-900"
                          >
                            {styleDates(selectedTask.modified)}
                          </div>
                        </div>
                        <div>
                          <div className="inline font-medium">Completed: </div>
                          <div
                            id="selectedTaskCompleted"
                            className="inline text-sm text-gray-900"
                          >
                            {styleDates(selectedTask.completed)}
                          </div>
                        </div>
                        <div>
                          <div className="inline font-medium">Archived: </div>
                          <div
                            id="selectedTaskCompleted"
                            className="inline text-sm text-gray-900"
                          >
                            {styleDates(selectedTask.archived)}
                          </div>
                        </div>
                      </div>
                      {/* Additional Actions */}
                      <div className="w-full">
                        {taskSubsectionHeader("Actions", "actions")}
                        <button
                          type="button"
                          className="inline-flex w-full items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => deleteSelectedTask(selectedTaskId)}
                        >
                          <TrashIcon
                            className="-ml-1 mr-3 h-5 w-5"
                            aria-hidden="true"
                          />
                          Archive Task
                        </button>
                      </div>
                    </div>
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
