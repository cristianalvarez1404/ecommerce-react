import type { OrderState } from "../../types/orderTypes";


const initialState: OrderState = {
  orders: [],
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  loading: false,
  error: null,
  orderCanceled: false,
}