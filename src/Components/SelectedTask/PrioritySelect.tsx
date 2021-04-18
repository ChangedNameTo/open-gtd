import { TaskPriority } from "../Task/TaskInterface";

const priorityOptions = [
  { value: TaskPriority.None, label: TaskPriority.None },
  { value: TaskPriority.Low, label: TaskPriority.Low },
  { value: TaskPriority.Medium, label: TaskPriority.Medium },
  { value: TaskPriority.High, label: TaskPriority.High },
  { value: TaskPriority.Immediate, label: TaskPriority.Immediate },
];

const buildOptionsList = () => {
  return priorityOptions.map((value) => {
    return (
      <option className="w-full" value={value.value} key={value.value}>
        {value.label}
      </option>
    );
  });
};

function PrioritySelect() {
  return (
    <select className="mt-1 w-full border border-gray-600 rounded-md focus:outline-none">
      {buildOptionsList()}
    </select>
  );
}

export default PrioritySelect;
