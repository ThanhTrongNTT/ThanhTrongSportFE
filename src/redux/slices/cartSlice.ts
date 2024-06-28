// Don't add any asynchronous logic or other "side effects" in reducer
// For example, logging a value to the console, ajax
// Just keep it simple
import { createSlice } from "@reduxjs/toolkit";
interface CartState {
    initialState: boolean;
}
const initialState: CartState = {
    initialState: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state) => {
            state.initialState = true;
        },
    },
});
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
