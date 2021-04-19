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
        <option className="w-full" value={value.value} key={value.value}>
          {value.label}
        </option>
      );
    });
  };

  return (
    <select
      className="mt-1 w-full border border-gray-600 rounded-md focus:outline-none"
      onChange={(e) => updateTaskPriority(e)}
      value={currentPriority}
    >
      {buildOptionsList()}
    </select>
  );
}

export default PrioritySelect;
