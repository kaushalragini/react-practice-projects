import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const getBookRequest = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};
export const getBookSuccess = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload,
  };
};
export const getBookFailure = () => {
  return {
    type: GET_BOOKS_FAILURE,
  };
};
export const getBooks = (params) => (dispatch) => {
  dispatch(getBookRequest());
  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
      params
    )
    .then((res) => {
      dispatch(getBookSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBookFailure());
    });
};
