import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../config/Api"
import type { Product } from "../../types/productTypes"

const API_URL = "http://localhost:5454"

export const fetchProductById = createAsyncThunk("products/fetchProductById",
  async(productId, {rejectWithValue}) => {
    try{
      const request = await api.get(`/products/${productId}`)

      return request.data;
    }catch(error:any){
      rejectWithValue(error.message)
    }
  }
)

export const searchProduct = createAsyncThunk("products/searchProduct",
  async(query, {rejectWithValue}) => {
    try{
      const request = await api.get(`/search`,{
        params:{
          query
        }
      })

      return request.data;
    }catch(error:any){
      rejectWithValue(error.message)
    }
  }
)

export const fetchAllProducts = createAsyncThunk<any, any>("products/fetchAllProducts",
  async(params, {rejectWithValue}) => {
    try{
      const request = await api.get(`/products`,{
        params:{
          ...params,
          pageNumber:params.pageNumber || 0
        }
      })

      return request.data;
    }catch(error:any){
      rejectWithValue(error.message)
    }
  }
)

interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined | any; 
  searchProduct: Product[]
}

const initialState:ProductState = {
  product: null,
  products: [],
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: []
}

const productSlice = createSlice({
  name:"products",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.content;
    })
    .addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
})

export default productSlice.reducer;