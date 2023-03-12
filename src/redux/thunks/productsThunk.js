import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk('products/fetch', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/product-list/');

    return response.data
});

const addProduct= createAsyncThunk('products/add',async({product, token})=>{
    const response = await axios.post('http://127.0.0.1:8000/product/', product, {headers:{
        "Authorization" : "Bearer " + token
      }})
    return response.data
});

const updateProduct = createAsyncThunk('product/update',async({product, token})=>{
    const response = await axios.put(`http://127.0.0.1:8000/product/${product.id}`, product, {headers:{
        "Authorization" : "Bearer " + token
      }})
    return response.data
} )

const removeProduct = createAsyncThunk('product/remove',async({product, token})=>{
    await axios.delete(`http://127.0.0.1:8000/product/${product.id}`, {headers:{
        "Authorization" : "Bearer " + token
      }})
    return product
} )

const fetchProductsByCategory = createAsyncThunk('product/bycategory', async(category)=>{
    const response = await axios.get(`http://127.0.0.1:8000/category/${category.id}/product`)
    return response.data
})

export {fetchProducts , addProduct ,updateProduct,removeProduct,fetchProductsByCategory};