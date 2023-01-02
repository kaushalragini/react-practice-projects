import {
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes";
import {
  POST_TODO_ERROR,
  POST_TODO_SUCCESS,
  POST_TODO_REQUEST,
} from "./actionTypes";

export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};

export const getTodoError = () => {
  return {
    type: GET_TODO_ERROR,
  };
};

export const postTodoRequest = () => {
  return {
    type: POST_TODO_REQUEST,
  };
};

export const postTodoSuccess = () => {
  return {
    type: POST_TODO_SUCCESS,
  };
};

export const postTodoError = () => {
  return {
    type: POST_TODO_ERROR,
  };
};


