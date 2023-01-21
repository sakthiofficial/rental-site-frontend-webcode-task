import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [1, 2]
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        }
    }
})
export default cartSlice