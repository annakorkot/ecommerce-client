
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const SigninAsync = createAsyncThunk('user/signin', async (e) => {
    const response = await axios.post("http://127.0.0.1:8000/token/",e);
    return response.data;
  });
  
export const RegisterAsync = createAsyncThunk('user/add', async (e) => {
    const response = await axios.post("http://127.0.0.1:8000/register/",e);
    return response.data;
  });

  export const getUserDetails = createAsyncThunk('user/detail', async(token)=>{
    const response = await axios.get("http://127.0.0.1:8000/me/", {headers:{
      "Authorization" : "Bearer " + token
    }});
    return response.data
  })