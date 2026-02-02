import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Cart, CartItem } from "../../types/cartTypes";
import { api } from "../../config/Api";
import { sumCartItemMrpPrice, sumCartItemSellingPrice } from "../../util/sumCartItemMrpPrice";
import { applyCoupon } from "./couponSlice";
import type { RootState } from "../store";

export const fetchUserCart = createAsyncThunk<Cart, string>(
  "cart/fetchUserCart",
  async (jwt: string , {rejectWithValue}) => {
    try{
      const response = await api.get("/api/cart", {
        headers:{
          Authorization: `Bearer ${jwt}`
        }
      })
      return response.data;
    }catch(error: any){
      return rejectWithValue("Failed to fetch user cart");
    }
  }
)

interface AddItemRequest {
  productId: number | undefined;
  size: string;
  quantity: number;
}

export const addItemToCart = createAsyncThunk<CartItem, {jwt: string | null; request: AddItemRequest}>(
  "cart/addItemToCart",
  async ({jwt, request}, {rejectWithValue}) => {
    try {
      const response = await api.put("/api/cart/add", request, {
        headers:{
          Authorization: `Bearer ${jwt}`
        }
      })

      return response.data;
    }
    catch(error){
      return rejectWithValue("Failed to add item to cart.")
    }
  }
)

export const deleteCartItem = createAsyncThunk<any, {jwt: string; cartItemId:number}>(
  "cart/deleteCartItem",
  async ({ jwt, cartItemId }, {rejectWithValue}) => {
    try {
      const response = await api.delete(`/api/cart/item/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      return response.data;
    } catch(error:any){
      return rejectWithValue(error.reponse.data.message || "Failed to delete cart item");
    }
  }
)

export const updateCartItem = createAsyncThunk<any, {jwt: string | null; cartItemId:number; cartItem: any}>(
  "cart/updateCartItem",
  async ({ jwt, cartItemId, cartItem }, { rejectWithValue }) => {
    try{
      const response = await api.put(
        `/api/cart/item/${cartItemId}`,
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      )
      return response.data;
    }catch(error:any){
      return rejectWithValue(
        error.reponse.data.message || "Failed to update cart item"
      )
    }
  }
)

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: (state) => {
      state.cart = null;
      state.loading = false;
      state.error;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchUserCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUserCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    })
    .addCase(fetchUserCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    .addCase(addItemToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addItemToCart.fulfilled, (state, action) => {
      if(state.cart){
        state.cart.cartItems.push(action.payload);
      }
      state.loading = false;
    })
    .addCase(addItemToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    //cart item
    .addCase(deleteCartItem.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteCartItem.fulfilled, (state, action) => {
      if(state.cart){
        state.cart.cartItems = state.cart.cartItems.filter((item:CartItem) => item.id !== action.meta.arg.cartItemId)
        const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || [])
        const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || [])
        state.cart.totalSellingPrice = sellingPrice;
        state.cart.totalMrpPrice = mrpPrice;
      }

      state.loading = false;
    })
    .addCase(updateCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(applyCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    })
  },
})

export default cartSlice.reducer;
export const {resetCartState} = cartSlice.actions;
// export const selectCart = (state: RootState) => state.cart.cart;
// export const selectCartLoading = (state: RootState) => state.cart.loading;
// export const selectCartError = (state: RootState) => state.cart.error;