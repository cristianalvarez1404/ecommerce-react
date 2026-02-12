import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { HomeCategory, HomeData } from "../../types/homeCategoryTypes";

export const fetchHomePageData = createAsyncThunk(
  "home/fetchHomePageData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/home-page");
      return response.data;
    }catch(error: any) {
      return error.response.data.message;
    }
  }
) 

export const createHomeCategories = createAsyncThunk(
  "home/createHomeCategories",
  async (homeCategories:HomeCategory[], {rejectWithValue}) => {
    try { 
      const response = await api.post("/home/categories", homeCategories);
      return response.data;
    } catch(error:any) {
      return error.response.data.message;
    }
  }
)

interface HomeState {
  homePageData: HomeData | null,
  homeCategories: HomeCategory[],
  loading:boolean,
  error:null | string,
}

const initialState: HomeState = {
  homePageData:null,
  homeCategories:[],
  loading: false,
  error: null
} 

const homeSlice = createSlice({
  name:"home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.pending, (state) => {
      state.loading = false;
      state.error = null;
    })
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    })
    builder.addCase(fetchHomePageData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || ""
    })

    builder.addCase(createHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(createHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    })
    builder.addCase(createHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to create home categories"
    })
  }
})

export default homeSlice.reducer