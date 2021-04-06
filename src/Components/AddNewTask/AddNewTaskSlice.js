import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: "tasks",
  initialState: ["test"],
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskListSlice.actions;
export const getTaskList = (state) => state.tasks;

export default taskListSlice.reducer;
