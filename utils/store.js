"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
 });