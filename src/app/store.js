import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const saveCart = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
};

store.subscribe(() => {
  saveCart(store.getState());
});
