import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    console.log("Dispathing action:", action);
    const result = next(action);
    console.log("New state:", storeAPI.getState());
    return result;
  };
