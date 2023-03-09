import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchCategories = createAsyncThunk('categories/fetch' , async()=>{
    const response = await axios.get('http://127.0.0.1:8000/category-list/')

    return response.data
});

export { fetchCategories };