import { createSlice } from "@reduxjs/toolkit";

// A Read Only Slice to access a Blueprint of User Data Items for API Submission

const initialState = {
  userData: [
    {
      fieldName: "First Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "First Name",
      secureInput: false,
    },
    {
      fieldName: "Last Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "Last Name",
      secureInput: false,
    },
    {
      fieldName: "Full Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "Full Name",
      secureInput: false,
    },
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
    {
      fieldName: "Special Code",
      fieldType: "text",
      minimumChars: 1,
      required: false,
      placeholderText: "Special Code",
      secureInput: false,
    },
  ],
};

export const createUserSlice = createSlice({
  name: "createUserData",
  initialState,
  reducers: {},
});

export default createUserSlice.reducer;
