import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux"
import { thunk } from "redux-thunk"
import sellerSlice from "./seller/sellerSlice"
import sellerProductSlice from "./seller/sellerProductSlice"
import productSlice from "./customer/productSlice"

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type AppiDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppiDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

