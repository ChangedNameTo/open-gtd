import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TaskStatus } from "../Task/TaskInterface";
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
  },
});

export const { setCompletionFilter } = taskFilterSlice.actions;

export const getFilters = (state: RootState) => state.filters;

export default taskFilterSlice.reducer;
