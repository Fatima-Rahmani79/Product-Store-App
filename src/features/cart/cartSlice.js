import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    increaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity++;
    },

    decreaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      } else {
        item.quantity--;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
