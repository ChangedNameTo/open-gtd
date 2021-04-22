import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// Change this to electron storage when I switch to electron
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import taskReducer from "./Components/TaskList/TaskListSlice";
import taskFilterReducer from "./Components/TaskListFilters/TaskFilterSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tasks"],
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

const reducers = combineReducers({
  tasks: persistReducer(taskPersistConfig, taskReducer),
  filters: persistReducer(filtersPersistConfig, taskFilterReducer),
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
