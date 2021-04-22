import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TaskPriority, TaskStatus } from "../Task/TaskInterface";
import TaskFilters from "../TaskListFilters/TaskFiltersInterface";

const initialState: TaskFilters = {
  completion: null,
  priority: null,
  hasNote: null,
};

export const taskFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCompletionFilter: (
      state: TaskFilters,
      action: PayloadAction<TaskStatus>
    ) => {
      state.completion = action.payload;
    },
    setPriorityFilter: (
      state: TaskFilters,
      action: PayloadAction<TaskPriority>
    ) => {
      state.priority = action.payload;
    },
    setHasNoteFilter: (state: TaskFilters, action: PayloadAction<boolean>) => {
      state.hasNote = action.payload;
    },
    clearAllFilters: (state: TaskFilters) => {
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
