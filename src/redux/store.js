import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default appStore;
