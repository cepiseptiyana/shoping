import { createSlice } from "@reduxjs/toolkit";
import { fetchCombinedData } from "./combineDataThunk";

const combinedDataSlice = createSlice({
  name: "combinedData",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCombinedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCombinedData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCombinedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default combinedDataSlice.reducer;
