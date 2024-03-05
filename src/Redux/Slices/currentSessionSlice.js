import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userData: {},
  darkMode: false,
};

export const currentSessionSlice = createSlice({
  name: "currentSessionData",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export default currentSessionSlice.reducer;
