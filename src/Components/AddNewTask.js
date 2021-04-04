import { Fragment, useEffect, useState } from "react";

function AddNewTask() {
  const [visible, setVisible] = useState(false);
  const [delayVisible, setDelayVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  const overlayClasses = () =>
    visible
      ? "absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
      : "hidden absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0";

  const modalClasses = () =>
    delayVisible
      ? "transform relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300"
      : "opacity-0 transform -translate-y-full scale-150 relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300";

  useEffect(() => {
    const toggleDelayVisible = () => setDelayVisible(!delayVisible);

    setTimeout(() => {
      toggleDelayVisible();
    }, 100);
  }, [visible]);

  return (
    <Fragment>
      <button
        class="w-full items-center px-4 bg-green-500 rounded-md shadow-m text-m font-medium border-green-600 border-2 hover:bg-green-600"
        onClick={() => toggleVisible()}
      >
        Add New Task
      </button>

      <div id="add_task_modal_overlay" class={overlayClasses()}>
        <div id="add_task_modal" class={modalClasses()}>
          <div>
            <h2 class="text-left">Add New Task</h2>
            <button>Close</button>
          </div>
          <div class="w-full p-3">Task Stuff</div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddNewTask;
