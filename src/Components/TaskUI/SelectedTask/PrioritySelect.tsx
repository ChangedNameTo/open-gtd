import { ChangeEvent } from "react";
import { TaskPriority } from "../Task/TaskInterface";
import { updateTaskTaskPriority } from "../TaskList/TaskListSlice";

const priorityOptions = [
  { value: TaskPriority.None, label: TaskPriority.None },
  { value: TaskPriority.Low, label: TaskPriority.Low },
  { value: TaskPriority.Medium, label: TaskPriority.Medium },
  { value: TaskPriority.High, label: TaskPriority.High },
  { value: TaskPriority.Immediate, label: TaskPriority.Immediate },
];

function PrioritySelect(
  dispatch: any,
  selectedTaskId: string,
  currentPriority: TaskPriority
) {
  const updateTaskPriority = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateTaskTaskPriority({
        newPriority: e.target.value,
        taskId: selectedTaskId,
      })
    );
  };

  const buildOptionsList = () => {
    return priorityOptions.map((value) => {
      return (
        <option
          className="w-full rounded"
          value={value.value}
          key={value.value}
        >
          {value.label}
        </option>
      );
    });
  };

  // TODO: Change this to use divs and a's instead of being a select
  return (
    <select
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      onChange={(e) => updateTaskPriority(e)}
      id="selectedTaskPrioritySelect"
      value={currentPriority}
    >
      {buildOptionsList()}
    </select>
  );
}

export default PrioritySelect;
