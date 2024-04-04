import { createSlice } from "@reduxjs/toolkit";

// A Read Only Slice to access a Blueprint of User Login Data Items for API Submission

const initialState = {
  userData: [
    {
      fieldName: "Email",
      fieldType: "email",
      minimumChars: 1,
      required: true,
      placeholderText: "Email",
      secureInput: false,
    },
    {
      fieldName: "Password",
      fieldType: "password",
      minimumChars: 8,
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
