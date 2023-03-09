import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts  } from "../store";
import { removeProduct } from "../thunks/productsThunk";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false ;
            state.error = action.error;
        });
        builder.addCase(removeProduct.pending,(state,action)=>{
            state.isLoading = true ;
        });

        builder.addCase(removeProduct.fulfilled,(state,action)=>{
            state.data =state.data.filter(product=>{
                return product.id !== action.payload.id
            })
        });
        builder.addCase(removeProduct.rejected,(state,action)=>{
            state.error = action.error
        });
    }
});

export const productsReducer = productSlice.reducer;