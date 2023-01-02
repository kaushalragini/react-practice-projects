import { POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case POST_TODO_REQUEST:
      return { ...state, isLoading: true };
    case POST_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] };
  }
};
