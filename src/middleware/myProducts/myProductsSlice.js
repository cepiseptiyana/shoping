import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, update_items } from "./myProductsThunk.js";

const myProducts = createSlice({
  name: "myProducts",
  initialState: {
    items: [],
    statusUpdate: [],
    loading: false,
    error: null,
  },
  reducers: {
    delete: (state, action) => {},
    clear: (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    handleQuantityMinRedux: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) product.quantity -= 1;
    },
    handleQuantityPlusRedux: (state, action) => {
      const { id } = action.payload;
      // console.log(JSON.parse(JSON.stringify(state.items)));
      const product = state.items.find((p) => p.id === id);
      if (product) product.quantity += 1;
    },
    handle_disabled: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) product.disabled = true;
    },
    handle_disabled_false: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) product.disabled = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload.data.map((item) => {
          return { ...item, disabled: false };
        });
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // updateQuantityMyProduct
    builder
      .addCase(update_items.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update_items.fulfilled, (state, action) => {
        state.loading = false;
        state.statusUpdate = action.payload;
      })
      .addCase(update_items.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  clear,
  handleQuantityMinRedux,
  handleQuantityPlusRedux,
  handle_disabled,
  handle_disabled_false,
} = myProducts.actions;
export default myProducts.reducer;
