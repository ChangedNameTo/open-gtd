import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";
import TaskFilter from "./TaskFiltersInterface";

const initialState: TaskFilter = {
  completion: null,
  priority: null,
  hasNote: null,
};

export const taskFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCompletionFilter: (
      state: TaskFilter,
      action: PayloadAction<TaskStatus>
    ) => {
      state.completion = action.payload;
    },
    setPriorityFilter: (
      state: TaskFilter,
      action: PayloadAction<TaskPriority>
    ) => {
      state.priority = action.payload;
    },
    setHasNoteFilter: (state: TaskFilter, action: PayloadAction<boolean>) => {
      state.hasNote = action.payload;
    },
    clearAllFilters: (state: TaskFilter) => {
      state.completion = null;
      state.priority = null;
      state.hasNote = null;
    },
  },
});

export const {
  setCompletionFilter,
  setPriorityFilter,
  setHasNoteFilter,
  clearAllFilters,
} = taskFilterSlice.actions;

export const getFilters = (state: RootState) => state.filters;

export default taskFilterSlice.reducer;
