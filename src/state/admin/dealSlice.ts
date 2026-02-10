import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../config/Api";
import type { DealState } from "../../types/dealTypes";

const initialState:DealState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false
}

export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async(deal:any, {rejectWithValue}) => {
    try{
      const response = await api.post("/admin/deals", deal, {
        headers: {
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("jwt")}`
        }
      })

      return response.data;
    }catch(error:any){
      return error.response.data;
    }
  }
)