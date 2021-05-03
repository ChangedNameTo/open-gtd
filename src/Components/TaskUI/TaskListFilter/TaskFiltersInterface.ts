import NormalizedObjects from "../../NormalizedObjects/NormalizedObjects";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";

export interface TaskFilterPreset {
  taskFilters: NormalizedObjects<TaskFilter>;
  selectedFilter: string | null;
}
export default interface TaskFilter {
  completion: TaskStatus | null;
  priority: TaskPriority | null;
  hasNote: boolean | null;
}
