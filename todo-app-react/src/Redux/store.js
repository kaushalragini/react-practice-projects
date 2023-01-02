import { legacy_createStore } from "redux";
import { reducer } from "./reduecr";
export const store = legacy_createStore(reducer);
