import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { Product } from "../../types/productTypes";

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  "/sellers/fetchSellerProducts",
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