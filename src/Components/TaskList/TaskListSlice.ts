import { enableMapSet } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import TaskList from "./TaskListInterface";

enableMapSet();

const initialState: TaskList = {
  taskList: { byId: {}, allIds: [] },
  selectedTask: -1,
};

export const taskListSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TaskList, action: PayloadAction<string>) => {
      // state.addTask(action.payload);
      const newTaskId = String(state.taskList.allIds.length);

      state.taskList.byId[newTaskId] = { task: action.payload };
      state.taskList.allIds.push(newTaskId);
    },
    selectTask: (state: TaskList, action: PayloadAction<number>) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { addTask, selectTask } = taskListSlice.actions;
export const getTaskIds = (state: RootState) => state.tasks.taskList.allIds;
export default taskListSlice.reducer;
