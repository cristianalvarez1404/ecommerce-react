import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Order, OrderItem, OrderState } from "../../types/orderTypes";
import { api } from "../../config/Api";
import type { Address } from "../../types/userTypes";

export const fetchUserOrderHistory = createAsyncThunk<Order[], string>(
  "/api/orders/fetchUserOrderHistory",
  async (jwt, {rejectWithValue}) => {
    try{
      const response = await api.get<Order[]>("/api/orders/user", {
        headers: {Authorization: `Bearer ${jwt}`},
      })
      return response.data;
    }catch(error){
      return rejectWithValue(
        error || "Failed to fetch order history"
      )
    }
  }
)

export const fetchOrderById = createAsyncThunk<Order, { orderId: number; jwt: string}>(
  "orders/fetchOrderById",
  async ({orderId, jwt},{rejectWithValue}) => {
    try {
      const response = await api.get<Order>(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${jwt}`}
      })
      return response.data;
    }catch(error:any){
      return rejectWithValue("Failed to fetch order")
    }
  }
)

export const createOrder = createAsyncThunk<any, {address: Address; jwt: string; paymentGateway: string}>(
  "orders/createOrder",
  async ({address, jwt, paymentGateway}, {rejectWithValue}) => {
    try {
      const response = await api.post("/api/orders", address, {
        headers: {Authorization: `Bearer ${jwt}`},
        params:{paymentGateway:paymentGateway}
      })

      if(response.data.payment_link_url){
        window.location.href = response.data.payment_link_url;
      }

      return response.data;
    }catch(error:any){
      return rejectWithValue("Failed to create order");
    }
  }
)

export const fetchOrderItemById = createAsyncThunk<OrderItem, {orderItemId: number; jwt:string}>("orders/fetchOrderItemById", 
  async ({orderItemId, jwt}, {rejectWithValue}) => {
    try{
      const response = await api.get<OrderItem>(`/api/orders/item/${orderItemId}`,{
        headers: {Authorization: `Bearer ${jwt}`}
      })

      return response.data;
    }catch(error:any){
      return rejectWithValue("Failed to create order");
    }
  }
)

export const paymentSuccess = createAsyncThunk<any,{paymentId: string; jwt:string; paymentLinkId:string},{rejectValue:string}>(
  "orders/paymentSuccess",
  async ({paymentId, jwt, paymentLinkId},{rejectWithValue}) => {
    try{
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        },
        params:{paymentLinkId}
      })
      return response.data;
    }catch(error:any){
      if(error.response){
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to proccess payment");
    }
  }
)

export const cancelOrder = createAsyncThunk<Order, any>(
  "orders/cancelOrder",
  async(orderId, {rejectWithValue}) => {
    try{
      const response = await api.put(`/api/orders/cancel`,{},{
        headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}
      })
      return response.data;
    }catch(error:any){
      return rejectWithValue("An error occurred while cancelling the order.")
    }
  }
)

const initialState: OrderState = {
  orders: [],
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  loading: false,
  error: null,
  orderCanceled: false,
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //Fetch order by ID
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.currentOrder = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create a new order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.paymentOrder = action.payload;
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch order item by ID
      .addCase(fetchOrderItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.orderItem = action.payload;
      })
      .addCase(fetchOrderItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // payment success handler
      .addCase(paymentSuccess.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentSuccess.fulfilled, (state, action) => {
        state.loading = false;
        console.log('Payment successfull: ', action.payload);
      })
      .addCase(paymentSuccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) => 
          order.id === action.payload.id ? action.payload : order
        );
        state.orderCanceled = true;
        state.currentOrder = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  }
})

export default orderSlice.reducer