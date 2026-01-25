import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp", 
  async ({email}:{email:string}, {rejectWithValue}) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp",{email})

      console.log("login otp ",response)
    }catch(error){
      console.log("error - - -",error)
    }
  }
)

export const signin = createAsyncThunk<any, any>("/auth/signin", 
  async (loginRequest, {rejectWithValue}) => {
    try {
      const response = await api.post("/auth/signin",loginRequest)
      console.log("login otp ",response.data)
      localStorage.setItem("jwt",response.data.jwt)
      return response.data.jwt
    }catch(error){
      console.log("error - - -",error)
    }
  }
)

export const signup = createAsyncThunk<any, any>("/auth/signup", 
  async (signupRequest, {rejectWithValue}) => {
    try {
      const response = await api.post("/auth/signup",signupRequest)
      console.log("login otp ",response.data)
      localStorage.setItem("jwt",response.data.jwt)
      return response.data.jwt
    }catch(error){
      console.log("error - - -",error)
    }
  }
)

export const fetchUserProfile = createAsyncThunk<any, any>("/auth/fetchUserProfile", 
  async ({jwt}, {rejectWithValue}) => {
    try {
      const response = await api.post("/api/users/profile",{
        headers:{
          Authorization: `Bearer ${jwt}`
        }
      })
      console.log("user profile",response.data)
      return response.data.jwt
    }catch(error){
      console.log("error - - -",error)
    }
  }
)

export const logout = createAsyncThunk<any, any>("/auth/logout", 
  async(navigate, {rejectWithValue}) => {
    try{
      localStorage.clear(); 
      navigate("/")
    } catch(error){
      console.log("error - - -", error);
    }
  }
)

interface AuthState {
  jwt: string | null | any,
  otpSend: boolean,
  isLoggedIn: boolean,
  user: any | null
  loading: boolean
}

const initialState: AuthState = {
  loading: false,
  jwt:null,
  otpSend:false,
  isLoggedIn:false,
  user:null
}

const authSlice = createSlice({
  name:"auth",
  initialState:initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(sendLoginSignupOtp.pending,(state) => {
      state.loading = true
    })
    builder.addCase(sendLoginSignupOtp.fulfilled,(state) => {
      state.loading = false
      state.otpSend = true
    })
    builder.addCase(sendLoginSignupOtp.rejected,(state) => {
      state.loading = false
    })
    builder.addCase(signin.fulfilled,(state, action) => {
      state.jwt = action.payload
      state.isLoggedIn = true
    })
    builder.addCase(signup.fulfilled,(state, action) => {
      state.jwt = action.payload
      state.isLoggedIn = true
    })
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    })
  }
})

export default authSlice.reducer;