import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";
export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
