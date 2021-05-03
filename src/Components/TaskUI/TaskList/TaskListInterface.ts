import { immerable } from "immer";
import { RootState } from "../../../store";

import Task from "../Task/TaskInterface";
import NormalizedObjects from "../../NormalizedObjects/NormalizedObjects";

export default interface TaskList {
  taskList: NormalizedObjects<Task>;
  selectedTask: string | null;
}
