function Project(props: { projectId: string }) {
  return (
    <tr key={props.projectId} id={`projectId${props.projectId}`}>
      <td className="px-6 py-0.5 text-sm text-gray-500 font-medium">icon</td>
      {/* Task Name */}
      <td className="px-6 py-0.5 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer">
        <div className="flex items-center">
          <div
            className={"flex-shrink-0 w-2.5 h-2.5 rounded-full"}
            aria-hidden="true"
          />
          <div className="truncate hover:text-gray-600 cursor-pointer">
            project text
          </div>
        </div>
      </td>
      {/* Priority */}
      <td className="py-0.5 text-sm text-gray-500 font-medium text-center">
        prio
      </td>
      {/* Defer Date */}
      <td className="hidden md:table-cell px-6 py-0.5 whitespace-nowrap text-sm text-gray-500 text-right">
        defer date
      </td>
      {/* Due Date */}
      <td className="hidden md:table-cell px-6 py-0.5 whitespace-nowrap text-sm text-gray-500 text-right">
        due date
      </td>
      {/* Options */}
      <td className="pr-6">note</td>
    </tr>
  );
}

export default Project;
