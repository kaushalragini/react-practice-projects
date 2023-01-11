import {
  GET_BOOK_ERROR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const getBookRequest = () => {
  return {
    type: GET_BOOK_REQUEST,
  };
};
export const getBookSuccess = (payload) => {
  return {
    type: GET_BOOK_SUCCESS,
    payload,
  };
};
export const getBookFailure = () => {
  return {
    type: GET_BOOK_ERROR,
  };
};

export const getBooks = (params) => (dispatch) => {
  dispatch(getBookRequest());
  return axios
    .get(`http://localhost:8080/books`,params)
    .then((res) => {
      console.log(res.data);
      dispatch(getBookSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBookFailure());
    });
};
