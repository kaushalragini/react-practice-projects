import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { reducer as AppReducer } from "./AppData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, AppReducer });
//  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
