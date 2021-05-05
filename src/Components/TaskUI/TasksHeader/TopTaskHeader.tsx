import AddNewTask from "./AddNewTask/AddNewTask";

function TopHeader(projectId: string | null) {
  return (
    <div className="bg-purple-700 border-y border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-white shadow-lg">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-medium leading-6 sm:truncate">
          {projectId ? "Projects" : "Inbox"}
        </h1>
      </div>
      {AddNewTask(projectId)}
    </div>
  );
}

export default TopHeader;
