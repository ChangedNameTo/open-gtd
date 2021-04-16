import { enableMapSet } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import TaskList from "./TaskListInterface";
import { TaskStatus } from "../Task/TaskInterface";

enableMapSet();

const initialState: TaskList = {
  taskList: { byId: {}, allIds: [] },
  selectedTask: "-1",
};

export const taskListSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TaskList, action: PayloadAction<string>) => {
      // Do not add task if the field is empty
      if (action.payload === "") {
        return;
      }

      const newTaskId = String(state.taskList.allIds.length);

      state.taskList.byId[newTaskId] = {
        task: action.payload,

        note: "",

        status: TaskStatus.Active,

        created: Date.now(),
        modified: Date.now(),
        completed: -1,
      };
      state.taskList.allIds.push(newTaskId);
    },
    selectTask: (state: TaskList, action: PayloadAction<string>) => {
      state.selectedTask = action.payload;
    },
    updateTaskTaskName: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.task = action.payload.newName;
      task.modified = Date.now();
    },
    updateTaskTaskStatus: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.status = action.payload.newStatus;

      if (task.status === TaskStatus.Complete) {
        task.completed = Date.now();
      } else {
        task.completed = -1;
      }

      task.modified = Date.now();
    },
    updateTaskTaskNote: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.note = action.payload.newNote;
      task.modified = Date.now();
    },
  },
});

export const {
  addTask,
  selectTask,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
} = taskListSlice.actions;

export const getTaskIds = (state: RootState) => state.tasks.taskList.allIds;
export const getSelectedTaskId = (state: RootState) => state.tasks.selectedTask;
export const getSelectedTask = (state: RootState) =>
  state.tasks.taskList.byId[state.tasks.selectedTask];

export default taskListSlice.reducer;
