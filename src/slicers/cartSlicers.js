import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartCount: 0
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload);
            state.cartCount = state.cartItems.length;

        }
        

    }
})

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;