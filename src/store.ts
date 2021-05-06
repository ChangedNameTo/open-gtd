import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// Change this to electron storage when I switch to electron
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import taskReducer from "./Components/TaskUI/TaskList/TaskListSlice";
import taskFilterReducer from "./Components/TaskUI/TaskListFilter/TaskFilterSlice";
import taskFilterPresetReducer from "./Components/TaskFilterPreset/TaskFilterPresetSlice";
import projectReducer from "./Components/ProjectUI/ProjectList/ProjectListSlice";
import uiCommsReducer from "./Components/UICommunications/UICommunicationsSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tasks", "presets", "projects", "comms"],
};

const taskPersistConfig = {
  key: "tasks",
  storage,
  blacklist: ["selectedTask"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const presetsPersistConfig = {
  key: "presets",
  storage,
};

const projectsPersistConfig = {
  key: "projects",
  storage,
};

const uiCommsPersistConfig = {
  key: "comms",
  storage,
  blacklist: ["exportJSONModalOpen"],
};

const reducers = combineReducers({
  tasks: persistReducer(taskPersistConfig, taskReducer),
  filters: persistReducer(filtersPersistConfig, taskFilterReducer),
  presets: persistReducer(presetsPersistConfig, taskFilterPresetReducer),
  projects: persistReducer(projectsPersistConfig, projectReducer),
  comms: persistReducer(uiCommsPersistConfig, uiCommsReducer),
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
