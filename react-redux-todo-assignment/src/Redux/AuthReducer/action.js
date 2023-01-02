import {
  POST_AUTH_ERROR,
  POST_AUTH_SUCCESS,
  POST_AUTH_REQUEST,
} from "./actionTypes";

export const postAuthRequest = () => {
  return {
    type: POST_AUTH_REQUEST,
  };
};

export const postAuthSucess = (payload) => {
  return {
    type: POST_AUTH_SUCCESS,
    payload,
  };
};

export const postAuthError = () => {
  return {
    type: POST_AUTH_ERROR,
  };
};
