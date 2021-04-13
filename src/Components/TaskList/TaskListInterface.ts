import { immerable } from "immer";
import { RootState } from "../../store";

import Task from "../Task/TaskInterface";

interface NormalizedObjects<T> {
  byId: { [id: string]: T };
  allIds: string[];
}

export default interface TaskList {
  taskList: NormalizedObjects<Task>;
  selectedTask: number;
}
