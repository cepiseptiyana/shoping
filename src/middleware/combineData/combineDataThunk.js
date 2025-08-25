import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCombinedData = createAsyncThunk(
  "combinedData/fetchCombineData",
  async ({ limit, skip }) => {
    // console.log("FETCHING: limit =", limit, "skip =", skip);

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    const data = await res.json();
    return data;
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);

export const fetchDataHighlight = createAsyncThunk(
  "dataHighlight",
  async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    return data;
  }
);
