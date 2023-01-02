import { ADD, REDUCE } from "./actionTypes";

export const Add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const Reduce = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};
