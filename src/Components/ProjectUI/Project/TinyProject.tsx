import { ChevronRightIcon } from "@heroicons/react/solid";

function TinyProject(props: { projectId: string }) {
  return (
    <li key={props.projectId}>
      <div className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6 cursor-pointer">
        <span className="flex items-center truncate space-x-3">
          <span
            className={"w-2.5 h-2.5 flex-shrink-0 rounded-full"}
            aria-hidden="true"
          />
          <span className="font-medium truncate text-sm leading-6">
            project name
          </span>
        </span>
        <ChevronRightIcon
          className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 flex-shrink-0"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}

export default TinyProject;
