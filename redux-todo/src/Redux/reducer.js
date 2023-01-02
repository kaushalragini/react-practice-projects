import { ADD, REDUCE } from "./actionTypes";
const initialState = 1;
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case ADD:
      return state + payload;
    case REDUCE:
      return state - payload;
  }
};
