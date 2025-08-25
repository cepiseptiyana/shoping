import { createSlice } from "@reduxjs/toolkit";

const alertLogin = createSlice({
  name: "alertLogin",
  initialState: {
    alertLog: "",
  },

  reducers: {
    handleAlert: (state, action) => {
      const { message } = action.payload;
      state.alertLog = message;
    },

    clearAlert: (state) => {
      state.alertLog = ""; // reset jadi kosong
    },
  },
});

export const { handleAlert, clearAlert } = alertLogin.actions;
export default alertLogin.reducer;
