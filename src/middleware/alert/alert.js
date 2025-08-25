import { createSlice } from "@reduxjs/toolkit";

const alertLogin = createSlice({
  name: "alertLogin",
  initialState: {
    alertLog: "",
    user: "",
  },

  reducers: {
    handleAlert: (state, action) => {
      const { message, user } = action.payload;
      state.alertLog = message;
      state.user = user;
    },

    clearAlert: (state) => {
      state.alertLog = ""; // reset jadi kosong
    },
  },
});

export const { handleAlert, clearAlert } = alertLogin.actions;
export default alertLogin.reducer;
