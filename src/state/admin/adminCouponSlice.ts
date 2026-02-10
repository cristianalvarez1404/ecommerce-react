import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Coupon } from "../../types/couponTypes";
import { api } from "../../config/Api";

const API_URL = "/api/coupons";

export const createCoupon = createAsyncThunk<Coupon, {coupon: any, jwt: string}, {rejectValue:string}>(
  "coupon/createCoupon",
  async ({coupon, jwt}, {rejectWithValue}) => {
    try {
      const response = await api.post(`${API_URL}/admin/create`, coupon, {
        headers: {Authorization: `Bearer ${jwt}`},
      })
      return response.data;
    }catch(error:any){
      return error.response.data;
    }
  }
)