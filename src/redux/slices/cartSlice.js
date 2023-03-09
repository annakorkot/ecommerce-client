import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart:[],
        isHidden :true
    },
    reducers:{
        addProduct(state,action){
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
        }
    }

});

export const {addProduct ,removeProduct ,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;