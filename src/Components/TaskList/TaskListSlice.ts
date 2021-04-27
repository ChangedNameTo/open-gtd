import { enableMapSet } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import TaskList from "./TaskListInterface";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";

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

        priority: TaskPriority.None,

        dueDate:-1,
        deferDate:-1,

        created: Date.now(),
        modified: Date.now(),
        completed: -1,
      };
      state.taskList.allIds.push(newTaskId);
    },
    selectTask: (state: TaskList, action: PayloadAction<string | null>) => {
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
    updateTaskTaskPriority: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.priority = action.payload.newPriority;
      task.modified = Date.now();
    },
    updateTaskTaskDeferDate: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.deferDate = action.payload.newDate;
      task.modified = Date.now();
    },
    updateTaskTaskDueDate: (state: TaskList, action: PayloadAction<any>) => {
      const task = state.taskList.byId[action.payload.taskId];

      task.dueDate = action.payload.newDate;
      task.modified = Date.now();
    },
    deleteTask: (state: TaskList, action: PayloadAction<any>) => {
      delete state.taskList.byId[action.payload.taskId];
      delete state.taskList.allIds[action.payload.taskId];
    },
  },
});

export const {
  addTask,
  selectTask,
  updateTaskTaskName,
  updateTaskTaskStatus,
  updateTaskTaskNote,
  updateTaskTaskPriority,
  updateTaskTaskDeferDate,
  updateTaskTaskDueDate
} = taskListSlice.actions;

export const getTasks = (state: RootState) => state.tasks.taskList;
export const getSelectedTaskId = (state: RootState) => state.tasks.selectedTask;
export const getSelectedTask = (state: RootState) => {
  const selected = state.tasks.selectedTask
  if(selected !== null) {
    return state.tasks.taskList.byId[selected];
  } else {
    return null
  }
}

export default taskListSlice.reducer;
