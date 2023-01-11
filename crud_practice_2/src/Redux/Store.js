import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ AppReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
