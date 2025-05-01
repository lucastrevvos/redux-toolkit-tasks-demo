import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  done: boolean;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      const newTask = {
        id: Date.now(),
        name: action.payload.name,
        done: false,
      };
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editTask: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.name = action.payload.name;
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { addTask, removeTask, editTask, toggleDone } = tasksSlice.actions;
export default tasksSlice.reducer;
