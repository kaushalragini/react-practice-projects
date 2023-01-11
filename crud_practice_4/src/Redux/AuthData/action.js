import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};

export const userLoginFailure = () => {
  return {
    type: USER_LOGIN_FAILURE,
  };
};

export const login = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  return axios
    .post(`https://reqres.in/api/login`,payload)
    .then((res) => {
      dispatch(userLoginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(userLoginFailure());
    });
};
