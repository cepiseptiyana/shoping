import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("myItems", async (account_id) => {
  // ganti ke api asli
  const response = await fetch(
    "https://shopping-api-omega.vercel.app/getItems",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ account_id }),
    }
  );

  const data = await response.json();
  return data;
});

// update_quantity
export const update_items = createAsyncThunk(
  "update_items",
  async ({ id, quantity, account_id }) => {
    // ganti ke api asli
    const response = await fetch(
      "https://shopping-api-omega.vercel.app/updateQuantity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ id, quantity, account_id }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Kalau gagal, lempar error dengan message dari API
      throw new Error(data.message || "Gagal update quantity");
    }
    console.log(data);
    return data;
  }
);
