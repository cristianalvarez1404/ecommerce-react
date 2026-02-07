import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { WishlistState } from "../../types/wishlistTypes";
import { api } from "../../config/Api";

export const getWishlistByUserId = createAsyncThunk(
  "wishlist/getWishlistByUserId",
  async (_, { rejectWithValue }) => {
    try{
      const response = await api.get(`/api/wishlist`,{
        headers:{ 
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      return response.data;
    }catch(error:any){
      return rejectWithValue(error.response.data.message || "Failed to fetch wishlist")
    }
  }
)

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProductToWishlist",
  async({productId}:{productId: number}, {rejectWithValue}) => {
    try{
      const response = await api.post(`/api/wishlist/add-product/${productId}`,{},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      return response.data;
    }catch(error:any){
      return rejectWithValue(
        error.response.data.message || "Failed to add product to wishlist"
      )
    }
  }
)

const initialState: WishlistState = {
  wishlist : null,
  loading: false,
  error: null
}

const wishlistSlice = createSlice({
  name:"wishlist",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(getWishlistByUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getWishlistByUserId.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.loading = false;
    })

    builder.addCase(getWishlistByUserId.rejected,(state,action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    // addProductToWishList

     builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addProductToWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.loading = false;
    })

    builder.addCase(addProductToWishlist.rejected,(state,action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  },
})

export default wishlistSlice.reducer