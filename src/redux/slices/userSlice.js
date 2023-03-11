import { createSlice } from "@reduxjs/toolkit";
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
    });
    builder.addCase(SigninAsync.rejected,(state,action)=>{
      throw action.error;
    });
    builder.addCase(RegisterAsync.rejected, (state, action) => {
      throw action.error;
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.data.first_name = action.payload.first_name;
      state.data.last_name = action.payload.last_name;
      state.data.email = action.payload.email;
      state.isLoading = false;
    })
  },
});

export const {logout} = userSlice.actions;
export default userSlice.reducer;
