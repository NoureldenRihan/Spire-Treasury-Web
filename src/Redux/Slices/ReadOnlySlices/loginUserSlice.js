import { createSlice } from "@reduxjs/toolkit";

// A Read Only Slice to access a Blueprint of User Login Data Items for API Submission

const initialState = {
  userData: [
    {
      label: "Email",
      type: "email",
      inputType: "Normal",
      required: true,
      placeholderText: "Email",
      secureInput: false,
    },
    {
      label: "Password",
      type: "password",
      inputType: "Normal",
      required: true,
      placeholderText: "Password",
      secureInput: true,
    },
  ],
};

export const loginUserSlice = createSlice({
  name: "loginUserData",
  initialState,
  reducers: {},
});

export default loginUserSlice.reducer;
