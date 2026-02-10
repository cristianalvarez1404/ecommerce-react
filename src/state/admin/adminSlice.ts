import { createAsyncThunk } from "@reduxjs/toolkit";
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