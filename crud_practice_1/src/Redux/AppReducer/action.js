import axios from "axios";
import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";

export const getBooksSuccess = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload,
  };
};

export const getBooksRequest = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};

export const getBooksFailure = () => {
  return {
    type: GET_BOOKS_FAILURE,
  };
};

export const getBooks = (params) => (dispatch) => {
  dispatch(getBooksRequest());
  return axios
    .get(`http://localhost:8080/books`, params)
    .then((res) => {
      dispatch(getBooksSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBooksFailure());
    });
};
