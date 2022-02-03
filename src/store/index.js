import { combineReducers } from "redux";
import { contactReducer } from "./contacts";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from './middlewares/logger'

const rootReducer = combineReducers({
  contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});