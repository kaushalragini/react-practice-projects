import { loadData, saveData } from "../../utils/accessLocalStorage";

import { ADD, REDUCE } from "./actionTypes";

const initialState = {
  count: loadData("count") || 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case ADD:
      const newCount1 = state.count + payload;
      saveData("count", newCount1);
      return { ...state, count: newCount1 };
    case REDUCE:
      const newCount = state.count + payload;
      saveData("count", newCount);
      return { ...state, count: state.count + payload };
  }
};
