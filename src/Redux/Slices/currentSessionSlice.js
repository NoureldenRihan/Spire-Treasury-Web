import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
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
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    sessionLogout: (state) => {
      state.userName = "";
      state.userEmail = "";
      state.userData = {};
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export default currentSessionSlice.reducer;
