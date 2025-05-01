import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import taskReducer from "./features/tasks/tasksSlice";
import filterReducer from "./features/filter/filterSlice";

import counterReducer from "./features/counter/counterSlice";

import { loadState, saveState } from "./utils/localStorage";

const preloadedTasks = loadState();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: taskReducer,
    filter: filterReducer,
    counter: counterReducer,
  },
  preloadedState: {
    tasks: preloadedTasks || [],
  },
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
