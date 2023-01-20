import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        cameras: [],
        gagets: []
    },
    reducers: {
        addProduct(state, action) {
            console.log(state);
        }
    }
})
export const { addProduct } = productSlice.actions
export default productSlice;
