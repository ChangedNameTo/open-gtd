import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskFilter, {
  TaskFilterPreset,
} from "../TaskListFilter/TaskFiltersInterface";
import { RootState } from "../../store";

const initialState: TaskFilterPreset = {
  taskFilters: { byId: {}, allIds: [] },
  selectedFilter: null,
};

export const taskFilterPresetSlice = createSlice({
  name: "presets",
  initialState,
  reducers: {
    addFilterPreset: (
      state: TaskFilterPreset,
      action: PayloadAction<TaskFilter>
    ) => {
      const newTaskFilterPresetId = String(state.taskFilters.allIds.length);

      state.taskFilters.byId[newTaskFilterPresetId] = action.payload;
      state.taskFilters.allIds.push(newTaskFilterPresetId);
    },
    clearFilterPresets: (state: TaskFilterPreset) => {
      state.taskFilters.byId = {};
      state.taskFilters.allIds = [];
    },
  },
});

export const {
  addFilterPreset,
  clearFilterPresets,
} = taskFilterPresetSlice.actions;

export const getTaskFilterPresets = (state: RootState) =>
  state.presets.taskFilters;

export default taskFilterPresetSlice.reducer;
