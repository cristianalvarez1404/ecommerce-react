import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
  
})

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type AppiDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppiDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

