import {
  POST_AUTH_ERROR,
  POST_AUTH_REQUEST,
  POST_AUTH_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case POST_AUTH_REQUEST:
      return { ...state, isLoading: true };
    case POST_AUTH_SUCCESS:
      return { ...state, token: payload, isAuth: true, isLoading: false };
    case POST_AUTH_ERROR:
      return { ...state, isError: true, isLoading: false };
  }
};
