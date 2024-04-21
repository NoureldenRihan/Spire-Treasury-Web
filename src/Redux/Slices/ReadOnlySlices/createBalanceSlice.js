import { createSlice } from "@reduxjs/toolkit";

// A Read Only Slice to access a Blueprint of User Balance Creation Data Items for API Submission

const initialState = {
  balanceData: [
    {
      label: "Account Tier",
      type: "text",
      inputType: "Radio",
      options: ["Bronze", "Silver", "Gold"],
      required: true,
      placeholderText: "Account Tier",
    },
    {
      label: "Amount",
      type: "number",
      inputType: "Normal",
      required: false,
      placeholderText: "Amount",
      secureInput: false,
    },
  ],
};

export const createBalanceSlice = createSlice({
  name: "createBalanceData",
  initialState,
  reducers: {},
});

export default createBalanceSlice.reducer;
