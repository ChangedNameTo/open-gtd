import AddNewProject from "./AddNewProject/AddNewProject";

function TopHeader() {
  return (
    <div className="bg-purple-700 border-y border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 text-white shadow-lg">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-medium leading-6 sm:truncate">Projects</h1>
      </div>
      {AddNewProject()}
    </div>
  );
}

export default TopHeader;
