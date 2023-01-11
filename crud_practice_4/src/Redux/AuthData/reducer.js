import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return { state };
    case USER_LOGIN_REQUEST:
      return { ...state, isAuthLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, token: payload, isAuth: true };
    case USER_LOGIN_FAILURE:
      return { ...state, isAuthError: true, isAuthLoading: false };
  }
};
