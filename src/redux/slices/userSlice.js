import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { RegisterAsync ,SigninAsync } from '../thunks/userThunk'

const initialState ={
  first_name : "" ,
  last_name : "" ,
  email : "" ,
  token : "",
  isLogged : false ,
  
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.isLogged = false;
      state.first_name = "";
      state.last_name = "";
      state.email = "";
    },
  },
  extraReducers(builder){
    builder.addCase(SigninAsync.fulfilled, (state, action) => {
          state.token = action.payload.access;
          state.isLogged = true;
          state.email = jwt_decode(action.payload.access).email;
          
        
      });
      builder.addCase(RegisterAsync.fulfilled, (state, action) => {
          state.token = action.payload.access
          state.isLogged = true;
          state.first_name= jwt_decode(action.payload.access).first_name
          state.last_name= jwt_decode(action.payload.access).last_name
          state.email=jwt_decode(action.payload.access).email
          
      });
  },
});

// export const selectLogged = (state) => state.login.isLogged;
// export const selectEmail = (state) => {console.log(state); return state.login.email;};
// export const selectUserName = (state) => state.login.first_name;
// export const selectUserLastName = (state) => state.login.last_name;
// export const selectToken = (state) => state.login.token;
// export const selectStaff = (state) => state.login.staff;

export const loginReducer = loginSlice.reducer;

// const initialState = {
//   isAuthenticated : false,
//   user:null,
//   token: null,
//   loading :false,
//   registered :false,
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     resetRegistered :state => {
//       state.registered = false ;
//     },

//   },
//   extraReducers: {},
// })



// export const { resetRegistered } = userSlice.actions
// export default userSlice.reducer