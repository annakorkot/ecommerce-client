import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers:{
        addProduct(state,action){
            const itemInCart =state.find((item) => item.id === action.payload.id);
            if (itemInCart){
                itemInCart.quantity++;
            } else {
                state.push({ ...action.payload ,quantity:1});
            }
        },
        incrementQuantity(state,action){
            const item = state.find((item)=>item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity(state,action){
            const item = state.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }  
        },
        removeProduct(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1)
        }
    }

});

export const {addProduct ,removeProduct ,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;