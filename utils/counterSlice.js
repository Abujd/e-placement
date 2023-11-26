"use client"

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      console.log("state.value",state.value);
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
