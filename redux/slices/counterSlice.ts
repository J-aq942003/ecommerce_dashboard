"use client";
import { createSlice } from "@reduxjs/toolkit";
////

const initialState = {
  count: 0, //You can name whatever you want.
  name: "John",
  isLoading: false,
};

//3- create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addOne: (state) => {
      state.count += 1;      
    },
    minusOne: (state) => {
      state.count -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addOne, minusOne, setName } = counterSlice.actions;
export default counterSlice.reducer;
