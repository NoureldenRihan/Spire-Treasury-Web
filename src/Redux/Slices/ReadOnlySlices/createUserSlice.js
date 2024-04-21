import { createSlice } from "@reduxjs/toolkit";

// A Read Only Slice to access a Blueprint of User Creation Data Items for API Submission

const initialState = {
  userData: [
    {
      label: "First Name",
      type: "text",
      inputType: "Normal",
      required: true,
      placeholderText: "First Name",
      secureInput: false,
    },
    {
      label: "Last Name",
      type: "text",
      inputType: "Normal",
      required: true,
      placeholderText: "Last Name",
      secureInput: false,
    },
    {
      label: "Full Name",
      type: "text",
      inputType: "Normal",
      required: true,
      placeholderText: "Full Name",
      secureInput: false,
    },
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
    {
      label: "Special Code",
      type: "text",
      inputType: "Normal",
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
