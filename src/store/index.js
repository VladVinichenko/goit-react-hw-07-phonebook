import { combineReducers } from "redux";
import { contactReducer } from "./contacts";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contactReducer,
});

export const store = configureStore({
  reducer: rootReducer
});