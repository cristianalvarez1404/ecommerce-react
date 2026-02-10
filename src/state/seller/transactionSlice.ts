import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { Transaction } from "../../types/transactionTypes";

// Thunks
export const fetchTransactionBySeller = createAsyncThunk<Transaction[], string, {rejectValue:string}>( 
  "transactions/fetchTransactionsBySeller", async (jwt,{rejectWithValue}) => {
    try {
      const response = await api.get<Transaction[]>("/api/transactions/seller", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      return response.data;
    }catch(error:any){
      if(error.response) {
        return rejectWithValue(error.response.data.messasge);
      }
      return error.response.data
    }
  }
)

export const fetchAllTransactions = createAsyncThunk<Transaction[], void, {rejectValue: string}>(
  "transactions/fetchAllTransactions",
  async(_, {rejectWithValue}) => {
    try{
      const response = await api.get("/api/transactions");
      return response.data;
    }catch(error:any){
      if(error.response){
        return rejectWithValue(error.response.data.message);
      }
    }
  }
)

interface TransactionState {
  transactions: Transaction[];
  transaction: Transaction | null;
  loading: boolean;
  error: string | null;
}

//Initial state
const initialState: TransactionState = {
  transactions: [],
  transaction: null,
  loading: false,
  error: null
}

// Slice
const transactionSlice = createSlice({
  name:"transactions",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(fetchTransactionBySeller.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTransactionBySeller.fulfilled, (state,action) => {
      state.loading = false;
      state.transactions = action.payload
    })
    builder.addCase(fetchTransactionBySeller.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchAllTransactions.fulfilled, (state,action) => {
      state.loading = false;
      state.transactions = action.payload 
    })
    builder.addCase(fetchAllTransactions.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
})

export default transactionSlice.reducer