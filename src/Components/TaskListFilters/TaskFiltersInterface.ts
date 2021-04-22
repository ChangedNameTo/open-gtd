import NormalizedObjects from "../NormalizedObjects/NormalizedObjects";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";

export default interface TaskFilters {
  completion: TaskStatus | null;
  priority: TaskPriority | null;
  hasNote: boolean | null;
}
