import { configureStore } from "@reduxjs/toolkit";
import combineDataReducer from "@/middleware/combineData/combineDataSlice.js";

export const store = configureStore({
  reducer: {
    combinedData: combineDataReducer,
  },
});
