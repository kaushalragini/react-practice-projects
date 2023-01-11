import {
  GET_BOOK_ERROR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "./actionTypes";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOK_REQUEST:
      return { ...state, isLoading: true };
    case GET_BOOK_SUCCESS:
      return { ...state, books: payload, isLoading: false };
    case GET_BOOK_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
