import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { HomeCategory } from "../../types/homeCategoryTypes";


const API_URL = '/admin';

export const updateHomeCategory = createAsyncThunk<any, {id:number, data:HomeCategory}>(
  "homeCategory/updateHomeCategory",
  async ({ id, data }, {rejectWithValue}) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      return response.data;
    } catch(error:any) {
      return error.response.data;
    }
  } 
)

export const fetchHomeCategories = createAsyncThunk(
  "homeCategory/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      return response.data;
    }catch(error: any){
      return error.response.data.message
    }
  }
)

interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated: false
}

const homeCategorySlice = createSlice({
  name:"homeCategory",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(updateHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;
    })

    builder.addCase(updateHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryUpdated = true;
      const index = state.categories.findIndex((category) => category.id === action.payload.id);

      if(index !== -1){
        state.categories[index] = action.payload;
      } else {
        state.categories.push(action.payload);
      }
    })

    builder.addCase(updateHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    builder.addCase(fetchHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;
    })

    .addCase(fetchHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })

    .addCase(fetchHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
})

export default homeCategorySlice.reducer