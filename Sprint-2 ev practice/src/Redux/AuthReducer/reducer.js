// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from './actionTypes'
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const {type, payload}= action;
  switch(type){
    case types.LOGIN_REQUEST:
      return {...state, isLoading: true};
    case types.LOGIN_SUCCESS:
      return {...state, isLoading: false, isAuth: true, token:payload};
    case types.LOGIN_FAILURE:
      return {...state, isLoading: false, isError: true}
    default:
      return state
    }
  
  

};

export { reducer };
