import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const reducerSlice = createSlice({
  name: "reducerSlice",
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    updateProductList: (state, action) => {
      const id = action.payload.id;
      if (state.products.find((item) => item.id === id) == null) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = state.products.map((item) => {
          if (item.id === id) {
            return { ...action.payload };
          } else {
            return item;
          }
        });
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    increaseCartQuantity: (state, action) => {
      const id = action.payload;
      if (state.cart.find((item) => item.id === id) == null) {
        state.cart = [...state.cart, { id, quantity: 1 }];
      } else {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    decreaseCartQuantity: (state, action) => {
      const id = action.payload;
      if (state.cart.find((item) => item.id === id)?.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export const {
  showCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  updateProductList,
  deleteProduct,
  removeFromCart,
  updateCart,
} = reducerSlice.actions;
export default reducerSlice.reducer;
