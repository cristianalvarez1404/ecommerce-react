import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { Product } from "../../types/productTypes";

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  "/sellerProduct/fetchSellerProducts",
  async (jwt: string, {rejectWithValue}) => {
    try{
      const response = await api.get("/sellers/products",{
        headers:{
          Authorization:`Bearer ${jwt}`
        }
      })

      return response.data;

    }catch(error){
      console.log(error);
      throw error;
    }
  }
)

export const createProduct = createAsyncThunk<Product,{request:any, jwt:string | null}>(
  "/sellerProduct/createProduct",
  async(args, {rejectWithValues}) => {
    const {request, jwt} = args;
    try {
      const response = await api.post(`/sellers/products`, request, {
        headers: {
          Authorization : `Bearer ${jwt}`
        }
      })
      return response.data;
    } catch(error) {
      console.log("error - - -", error);
      throw error;
    }
  }
)

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState:SellerProductState = {
  products: [],
  loading: false,
  error: null
}

const sellerProductSlice = createSlice({
  name:"sellerProduct",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(fetchSellerProducts.pending,(state) => {
      state.loading = true;
    })
    .addCase(fetchSellerProducts.fulfilled, (state,action) => {
      state.loading = false;
      state.products = action.payload
    })
    .addCase(fetchSellerProducts.rejected, (state,action) => {
      state.loading = false;
      state.error = action.error.message
    })
    .addCase(createProduct.pending,(state) => {
      state.loading = true;
    })
    .addCase(createProduct.fulfilled, (state,action) => {
      state.loading = false;
      state.products.push(action.payload)
    })
    .addCase(createProduct.rejected, (state,action) => {
      state.loading = false;
      state.error = action.error.message
    })
  }
})

export default sellerProductSlice.reducer