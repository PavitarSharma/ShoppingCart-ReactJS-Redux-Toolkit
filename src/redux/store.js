import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import cartReducer from './features/cartSlice';
import filtersReducer from "./features/filterSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    filters: filtersReducer,
  },
});

