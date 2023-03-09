
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const SigninAsync = createAsyncThunk('user/signin', async (e) => {
    const response = await axios.post("http://127.0.0.1:8000/token/",e);
    console.log(response.data)
    return response.data;
  });
  
export const RegisterAsync = createAsyncThunk('user/add', async (e) => {
    const response = await axios.post("http://127.0.0.1:8000/register/",e);
    return response.data;
  });
