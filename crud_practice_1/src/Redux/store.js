import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";

const rootReducer = combineReducers({ AppReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
