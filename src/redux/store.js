import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cart";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})
export default store