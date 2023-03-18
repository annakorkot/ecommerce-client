import { createSlice } from "@reduxjs/toolkit";
import { updateProduct ,removeProduct } from '../store'

const editProductSlice = createSlice({
    name: 'editProduct',
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },reducers:{
        selectProductToEdit(state, action){
            state.data = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(updateProduct.rejected,(state,action)=>{
            state.isLoading = false ;
            state.error = action.error;
        });
       
    }
});

export const { selectProductToEdit } = editProductSlice.actions;
export default editProductSlice.reducer;