import { configureStore } from "@reduxjs/toolkit";
import combineDataReducer from "@/middleware/combineData/combineDataSlice.js";
import productDetailReducer from "@/middleware/combineData/productDetailSlice.js";

export const store = configureStore({
  reducer: {
    combinedData: combineDataReducer,
    productDetail: productDetailReducer,
  },
});
