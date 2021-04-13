/**
 * After clicking on a task in
 * @returns {FunctionComponent}
 */
function selectedTask() {
  return (
    <div className="flex-auto px-2">
      <div className="header bg-white shadow">
        <div className="max-w-4xl mx-auto py-2 px-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Task</h1>
        </div>
      </div>
      <div className="divide-y" id="taskList"></div>
      <br />
    </div>
  );
}

export default selectedTask;
