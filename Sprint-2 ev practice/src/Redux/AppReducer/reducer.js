// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType";
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SHOES_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_SHOES_DATA_SUCCESS:
      return { ...state, isLoading: false, shoes: payload };
    case types.GET_SHOES_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
