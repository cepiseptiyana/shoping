import { createSlice } from "@reduxjs/toolkit";
import { fetchCombinedData, fetchProductById } from "./combineDataThunk";

const combinedDataSlice = createSlice({
  name: "combinedData",
  initialState: {
    data: [],
    dataFilter: [],
    currentPage: 1,
    total: 0,
    limit: 20,
    loading: true,
    error: null,
  },

  reducers: {
    resetData(state) {
      state.data = [];
      state.loading = false;
      state.error = null;
      state.limit = 20;
    },

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
      console.log(action.payload);

      const data2 = state.data.filter((data) => {
        return data.category === action.payload;
      });

      state.dataFilter = [...state.dataFilter, ...data2];
    },

    setFilterCheckbox(state, action) {
      const { name, checked } = action.payload;
      console.log(name);

      if (checked) {
        const data2 = state.data.filter((data) => {
          return data.category === name;
        });

        state.dataFilter = [...state.dataFilter, ...data2];
      } else {
        state.dataFilter = state.dataFilter.filter(
          (data) => data.category !== name
        );
      }
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

export const {
  setPage,
  setSortOption,
  setFilter,
  setDeleteFilter,
  resetData,
  setFilterCheckbox,
} = combinedDataSlice.actions;

export default combinedDataSlice.reducer;
