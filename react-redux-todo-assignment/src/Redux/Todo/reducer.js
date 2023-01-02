import { loadData, saveData } from "../../utils/accessLocalStorage";
import {
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_ERROR,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return { ...state, todos: payload, isLoading: false };
    case GET_TODO_ERROR:
      return { ...state, isLoading: false, isError: true };
    case POST_TODO_REQUEST:
      return { ...state, isLoading: true };
    case POST_TODO_SUCCESS:
      return { ...state };
    case POST_TODO_ERROR:
      return { ...state, isError: true, isLoading: false };
  }
};
