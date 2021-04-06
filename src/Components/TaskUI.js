import TaskList from "./TaskList";

function TaskUI() {
  return (
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="flex space-x-2">
        <div class="flex-auto px-2">
          <div class="header bg-white shadow">
            <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold text-gray-900 text-center">
                Folders
              </h1>
            </div>
          </div>
        </div>
        {TaskList()}
        <div class="flex-auto px-2">
          <div class="header bg-white shadow">
            <div class="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold text-gray-900 text-center">Info</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskUI;
