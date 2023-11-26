"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
 });
/**
 * React redux 
 * It helps to manage centralized state, predictable state management
 * Predicatble data flow
 * It hepls to write re usable state logic
 * 
 * How to implement the redux 
 * Install react redux toolkit
 * Configure the store with help of  configureStore function present in redux toolkit
 * Connect APP with the redux with help of Providers and give store as a props
 * create a slice object which has name, initial state and reducers object
 * from slice export the counterslice.reducer by default and do named export of actions like increment, decrement
 * 
 * to modify the store use the useDispatch hook - It dispaches the action to modify the store
 * To use The store values we have the useSelector hook 
 * 
 * 
 * How redux works
 * 
 * Whenever certain event happens that dispaches the action. That action calls the reducer function which upadates the slice of the store. 
 * to use redux values in UI component. It should subscribe to the redux store with the help of useSelectore
 * 
 * 
 * Used jorgons meaning
 * configureStore - 
 *            method provided by the redux toolkit hepls to configure store it taks the object of the reducers
 *            It automatically sets up the store with good default settings
 * Providers - 
 *            It hepls to conect the redux with our app
 *            It takes Redux store as a props
 * slice -    Peace of code with three things -  name, initial state, reducers
 * 
 * To read data from store we use UseSelector hook
 * To update the store we dispach the action with the help od useDispatch 
 * 
 * 
 * 
 * 
 * 
 */