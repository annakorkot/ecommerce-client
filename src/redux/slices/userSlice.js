import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { RegisterAsync, SigninAsync, getUserDetails } from '../thunks/userThunk'

const initialState = {
  data: {
    first_name: "",
    last_name: "",
    email: "",
    token: "",
  },
  isLogged: false,
  isLoading: false,
  error: null

}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.data.token = "";
      state.data.isLogged = false;
      state.data.first_name = "";
      state.data.last_name = "";
      state.data.email = "";
      state.isLogged = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(SigninAsync.fulfilled, (state, action) => {
      state.data.token = action.payload.access;
      state.isLogged = true;
      console.log("jwt_decode: ");
      console.log(jwt_decode(action.payload.access))
      // state.first_name= jwt_decode(action.payload.access).first_name
      // state.last_name= jwt_decode(action.payload.access).last_name
      // state.email=jwt_decode(action.payload.access).email
    });
    builder.addCase(RegisterAsync.fulfilled, (state, action) => {

      // state.first_name= jwt_decode(action.payload.access).first_name
      // state.last_name= jwt_decode(action.payload.access).last_name
      // state.email=jwt_decode(action.payload.access).email   
    });
    builder.addCase(getUserDetails.pending, (action, state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserDetails.rejected, (action, state) => {
      state.error = action.error;
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.data.first_name = action.payload.first_name;
      state.data.last_name = action.payload.last_name;
      state.data.email = action.payload.email;
    })
  },
});

export const {logout} = userSlice.actions;
export default userSlice.reducer;
