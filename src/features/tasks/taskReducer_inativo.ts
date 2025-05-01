export const initialState = [];

export function taskReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
}
