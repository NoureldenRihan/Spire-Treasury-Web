import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      fieldName: "First Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "Your First Name",
      secureInput: false,
    },
    {
      fieldName: "Last Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "Your Last Name",
      secureInput: false,
    },
    {
      fieldName: "Full Name",
      fieldType: "text",
      minimumChars: 1,
      required: true,
      placeholderText: "Your Full Name",
      secureInput: false,
    },
    {
      fieldName: "Email",
      fieldType: "email",
      minimumChars: 1,
      required: true,
      placeholderText: "email@email.com",
      secureInput: false,
    },
    {
      fieldName: "Password",
      fieldType: "password",
      minimumChars: 8,
      required: true,
      placeholderText: "********",
      secureInput: true,
    },
    {
      fieldName: "Special Code",
      fieldType: "text",
      minimumChars: 1,
      required: false,
      placeholderText: "ABC1234",
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
