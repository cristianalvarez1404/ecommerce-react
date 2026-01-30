import type { CartItem } from "../types/cartTypes"

export const sumCartItemMrpPrice = (cartItems:CartItem[]):number => {
  return cartItems.reduce((acc, item) => acc + item.mrpPrice * item.quantity, 0);
}

export const sumCartItemSellingPrice = (cartItems:CartItem[]):number => {
  return cartItems.reduce((acc, item) => acc + item.sellingPrice * item.quantity, 0);
}