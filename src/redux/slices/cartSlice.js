import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers:{
        addProduct(state,action){
            state.push(action.payload);
        },
        removeProduct(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1)
        }
    }

});

export const {addProduct ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;