import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../store";

const categorySlice = createSlice({
    name: 'categories',
    initialState :{
        data:[],
        isLoading : false,
        error : null
    },
    extraReducers(builder){
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.isLoading = false ;
            state.error = action.error;
        });
    }

});

export const categoriesReducer = categorySlice.reducer;