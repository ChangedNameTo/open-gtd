import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: "tasks",
  initialState: [
    "Followup on the email with Tedrick",
    "Reply to Jennifer",
    "This is a really long sentence so that I can test that wrapping works properly",
  ],
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      console.log(state);
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskListSlice.actions;
export const getTaskList = (state) => state.tasks;

export default taskListSlice.reducer;
