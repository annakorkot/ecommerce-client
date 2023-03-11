import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsByCategory } from "../store";

const productsByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState :{
        data:[],
        isLoading : false,
        error : null,
        category : null
    },
    reducers:{
        selectCategory(state,action){
            state.category = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProductsByCategory.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchProductsByCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
            
        });
        builder.addCase(fetchProductsByCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
    }

});

export const { selectCategory } = productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;