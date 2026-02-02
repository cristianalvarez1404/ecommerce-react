import { Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import type { CartItem as ICartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../state/store";
import { updateCartItem } from "../../../state/customer/cartSlice";

const CartItem = ({ item }:{ item:ICartItem }) => {
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (value:number) => {
    //TODO update item quantity
    const jwt = localStorage.getItem("jwt")
    dispatch(updateCartItem({ jwt,cartItemId:item.id, cartItem:{quantity:item.quantity + value}}))
  };

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">{item.product.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong> Products Private Limited
          </p>
          <p className="text-sm text-gray-500">
            <strong>Quantity: </strong> {item.quantity}
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={() => handleUpdateQuantity(-1)} disabled={true}>
              <Remove />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={() => handleUpdateQuantity(1)}>
              <AddIcon />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">${item.sellingPrice}</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
