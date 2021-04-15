import { enableMapSet } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import TaskList from "./TaskListInterface";

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
      // state.addTask(action.payload);
      const newTaskId = String(state.taskList.allIds.length);

      state.taskList.byId[newTaskId] = {
        task: action.payload,
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
  },
});

export const {
  addTask,
  selectTask,
  updateTaskTaskName,
} = taskListSlice.actions;

export const getTaskIds = (state: RootState) => state.tasks.taskList.allIds;
export const getSelectedTaskId = (state: RootState) => state.tasks.selectedTask;
export const getSelectedTask = (state: RootState) =>
  state.tasks.selectedTask !== "-1"
    ? state.tasks.taskList.byId[state.tasks.selectedTask]
    : { task: "", created: -1, completed: null };

export default taskListSlice.reducer;
