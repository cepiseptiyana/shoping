import { createSlice, current } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
  name: "cartDataSlice",
  initialState: {
    data: [],
    empty: true,
    countCart: 0,
    totalCheckouts: 0,
  },

  reducers: {
    addCart: (state, action) => {
      const dataPayload = action.payload;

      const find = state.data.find(
        (data) =>
          data.id === dataPayload.id &&
          data.size === dataPayload.size &&
          data.delivery === dataPayload.delivery
      );

      if (find) {
        const newData = state.data.map((data) => {
          if (
            dataPayload.id === data.id &&
            dataPayload.size === data.size &&
            dataPayload.delivery === data.delivery
          ) {
            return {
              ...data,
              quantity: dataPayload.quantity,
              totalDelivery: dataPayload.totalDelivery,
            };
          }

          return data;
        });

        state.data = newData;
        state.countCart = state.data.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        // console.log(state.countCart);
      } else {
        state.empty = false;
        state.countCart += dataPayload.quantity;
        // console.log(state.countCart);
        state.data = [...state.data, dataPayload];
      }
    },

    addQuantity: (state, action) => {
      const { id, quantity, size, totalDelivery, checked, delivery } =
        action.payload;
      const find = state.data.find(
        (data) =>
          data.id === id && data.size === size && data.delivery === delivery
      );

      let newData = state.data.map((data) => {
        return data.id === id &&
          data.size === size &&
          data.delivery === delivery
          ? {
              ...data,
              quantity: quantity,
              totalDelivery: totalDelivery,
            }
          : data;
      });

      if (find && quantity <= find.stock) {
        // cheked ini akan true jika checbox cheked
        if (checked) {
          state.totalCheckouts = parseFloat(
            (state.totalCheckouts + delivery).toFixed(2)
          );
        }

        state.countCart += 1;
        console.log(state.countCart);
        state.data = newData;
      }
    },

    reduceQuantity: (state, action) => {
      const { id, quantity, size, newTotalDelivery, delivery, checked } =
        action.payload;
      const find = state.data.find(
        (data) =>
          data.id === id && data.size === size && data.delivery === delivery
      );
      const getDelivery = parseFloat(find.delivery.toFixed(2));

      let newData = state.data.map((data) => {
        return data.id === id &&
          data.size === size &&
          data.delivery === delivery
          ? {
              ...data,
              quantity: quantity,
              totalDelivery: newTotalDelivery,
            }
          : data;
      });

      if (find && quantity > 0) {
        if (checked) {
          state.totalCheckouts = parseFloat(
            (state.totalCheckouts - getDelivery).toFixed(2)
          );
        }

        state.countCart -= 1;
        console.log(state.countCart);
        state.data = newData;
      }
    },

    changeQuantity: (state, action) => {
      const { id, size, totalDelivery, quantity, checked, delivery } =
        action.payload;
      const updatedQuantity = parseInt(quantity);
      const newTotalDelivery = totalDelivery;
      console.log(checked);

      const find = state.data.find(
        (data) =>
          data.id === id && data.size === size && data.delivery === delivery
      );

      let newData = state.data.map((data) => {
        return data.id === id &&
          data.size === size &&
          data.delivery === delivery
          ? {
              ...data,
              quantity: updatedQuantity,
              totalDelivery: newTotalDelivery,
            }
          : data;
      });

      if (find && updatedQuantity <= find.stock) {
        // cheked ini akan true jika checbox cheked
        if (checked) {
          state.totalCheckouts = parseFloat(totalDelivery.toFixed(2));
        }

        state.data = newData;
      }
    },

    totalCheckout: (state, action) => {
      const { id, size, checked, delivery } = action.payload;
      const find = state.data.find(
        (data) =>
          data.id === id && data.size === size && data.delivery === delivery
      );
      const totalDeliver = parseFloat(find.totalDelivery.toFixed(2));

      if (checked && find) {
        // ! jika checked
        // ! delivery * quantity
        state.totalCheckouts = parseFloat(
          (state.totalCheckouts + totalDeliver).toFixed(2)
        );
      } else {
        console.log("!checked");
        state.totalCheckouts = parseFloat(
          (state.totalCheckouts - totalDeliver).toFixed(2)
        );
      }
    },

    resetTotalCheckouts: (state, action) => {
      state.totalCheckouts = 0;
    },
  },
});

export const {
  addCart,
  addCountCart,
  addQuantity,
  totalCheckout,
  reduceQuantity,
  changeQuantity,
  resetTotalCheckouts,
} = cartDataSlice.actions;
export default cartDataSlice.reducer;
