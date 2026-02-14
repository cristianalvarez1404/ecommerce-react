import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../config/Api";
import type { DealState } from "../../types/dealTypes";

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
      return error.response.message;
    }
  }
)

export const getAllDeals = createAsyncThunk(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try{
      const response = await api.get("/admin/deals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      return response.data;
    }catch(error:any) {
      return error.response.data.message;
    }
  }
)


export const deleteDeal = createAsyncThunk(
  "deals/deleteDeal",
  async (id: number, { rejectWithValue}) => {
    try {
      const response = await api.delete(`/admin/deals/${id}`, {
        headers : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      });
      return response.data;
    } catch(error: any) {
      return error.response.data.message;
    }
  }
)

const initialState:DealState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false
}

const dealSlice = createSlice({
  name:"deal",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(createDeal.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.dealCreated = false;
    })
    .addCase(createDeal.fulfilled, (state, action) => {
      state.loading = false;
      state.deals.push(action.payload);
      state.dealCreated = true;
    })
    .addCase(createDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = null;
    })
    
    .addCase(deleteDeal.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteDeal.fulfilled, (state, action) => {
      state.loading = false;
      
    })
    .addCase(deleteDeal.rejected, (state, action) => {
      
    })


  }
})

export default dealSlice.reducer