import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
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
          params,
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
  error: string | null | undefined; 
  searchProduct: Product[]
}

// const initialState