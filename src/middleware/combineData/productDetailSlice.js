import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "./combineDataThunk";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: [],
    dataFilter: [],
    currentPage: 1,
    total: 0,
    limit: 20,
    loadingDetail: true,
    errorDetail: null,
  },

  extraReducers: (builder) => {
    // === fetchProductById ===
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loadingDetail = true;
        state.errorDetail = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loadingDetail = false;
        state.errorDetail = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;
