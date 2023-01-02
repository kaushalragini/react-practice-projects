import { ADD, REDUCE } from "./actionTypes";

export const addHandler = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const reduceHandler = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};
