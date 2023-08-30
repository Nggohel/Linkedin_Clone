import { combineReducers } from "@reduxjs/toolkit";
import { useReducer } from "./useReducer";

const rootReducer = combineReducers({
  useState: useReducer,
});
