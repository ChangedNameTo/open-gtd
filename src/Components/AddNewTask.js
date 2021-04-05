import { Fragment, useEffect, useState } from "react";

function AddNewTask() {
  const [visible, setVisible] = useState(false);
  const [delayVisible, setDelayVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  const inputClasses = () => (visible ? "w-full" : "w-full hidden");

  return (
    <Fragment>
      <div class="space-y-2">
        <button
          class="w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600"
          onClick={() => toggleVisible()}
        >
          Add New Task
        </button>
        <input
          type="text"
          class="rounded-md w-full border border-blue-100 focus:ring"
          placeholder="Enter new task"
        />
      </div>
    </Fragment>
  );
}

export default AddNewTask;
