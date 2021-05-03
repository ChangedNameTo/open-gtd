import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProjectList from "./ProjectListInterface";
import { RootState } from "../../../store";

const initialState: ProjectList = {
  projectList: { byId: {}, allIds: [] },
};

export const projectListSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state: ProjectList, action: PayloadAction<string>) => {
      if (action.payload === "") {
        return;
      }

      const newProjectId = String(state.projectList.allIds.length);

      state.projectList.byId[newProjectId] = {
        project: action.payload,

        pinned: false,

        created: Date.now(),
        modified: Date.now(),
        completed: -1,
        archived: null,
      };

      state.projectList.allIds.push(newProjectId);
    },
  },
});

export const { addProject } = projectListSlice.actions;

export const getProjects = (state: RootState) => state.projects.projectList;

export default projectListSlice.reducer;
