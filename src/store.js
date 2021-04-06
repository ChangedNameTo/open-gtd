import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Components/AddNewTask/AddNewTaskSlice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
