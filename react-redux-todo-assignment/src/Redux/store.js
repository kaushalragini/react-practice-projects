import { legacy_createStore, combineReducers } from "redux";
import { reducer as TodoReducer } from "./Todo/reducer";
import { reducer as CountReducer } from "./Counter/reducer";
import { reducer as LoginReducer } from "./AuthReducer/reducer";
const rootReducer = combineReducers({
  CountReducer,
  TodoReducer,
  LoginReducer,
});
export const store = legacy_createStore(rootReducer);
