import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart:[],
        isHidden :true
    },
    reducers:{
        addToCart(state,action){
            const itemInCart =state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart){
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload ,quantity:1});
            }
        },
        incrementQuantity(state,action){
            const item = state.cart.find((item)=>item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity(state,action){
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }  
        },
        removeProduct(state,action){
            const index = state.cart.indexOf(action.payload);
            state.cart.splice(index,1)
        },
        hideCart(state, action) {
            state.isHidden = true;
        },
        showCart(state, action) {
            state.isHidden = false;
        }
    }

});

export const {addToCart ,removeProduct ,incrementQuantity,decrementQuantity, hideCart, showCart} = cartSlice.actions;
export default cartSlice.reducer;