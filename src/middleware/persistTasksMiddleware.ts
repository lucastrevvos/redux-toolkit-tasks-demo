import { Middleware } from "@reduxjs/toolkit";

import {
  addTask,
  editTask,
  removeTask,
  toggleDone,
} from "../features/tasks/tasksSlice";

const actionsToWatch = [
  addTask.type,
  editTask.type,
  removeTask.type,
  toggleDone.type,
];

export const persistTasksMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);

    if (actionsToWatch.includes(action.type)) {
      const { tasks } = storeAPI.getState();
      localStorage.setItem("tasks", JSON.stringify(tasks));

      return result;
    }
  };
