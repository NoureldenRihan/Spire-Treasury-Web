import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const tempSlice = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export default tempSlice.reducer;
