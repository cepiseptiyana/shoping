import { createSlice } from "@reduxjs/toolkit";
import { fetchCombinedData } from "./combineDataThunk";

const combinedDataSlice = createSlice({
  name: "combinedData",
  initialState: {
    data: [],
    dataFilter: [],
    currentPage: 1,
    total: 0,
    limit: 20,
    loading: false,
    error: null,
  },

  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    setSortOption(state, action) {
      const option = action.payload;
      console.log(option);

      if (option === "populer") {
        state.data = [...state.data].sort((a, b) => b.rating - a.rating);
      } else if (option === "rekomendasi") {
        state.data = [...state.data].sort((a, b) => a.rating - b.rating);
      }
    },

    setFilter(state, action) {
      const data = action.payload;
      console.log(data);
      const combined = [...state.dataFilter, ...data];
      state.dataFilter = combined;
    },

    setDeleteFilter(state, action) {
      const checkValue = action.payload;
      console.log(checkValue);

      if (!checkValue) {
        state.dataFilter = state.data;
        return;
      }

      state.dataFilter = state.dataFilter.filter((data) => {
        return data.category !== checkValue;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCombinedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCombinedData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.products;
        state.dataSort = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchCombinedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setSortOption, setFilter, setDeleteFilter } =
  combinedDataSlice.actions;

export default combinedDataSlice.reducer;
