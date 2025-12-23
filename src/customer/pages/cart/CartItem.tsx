import { Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {
    //TODO update item quantity
  };

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Clothing</h1>
          <p className="text-gray-600 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            repellendus excepturi, sint repellat, blanditiis alias totam.
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong> Products Private Limited
          </p>
          <p className="text-sm text-gray-500">
            <strong>Quantity: </strong> 5
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>5</span>
            <Button onClick={handleUpdateQuantity}>
              <AddIcon />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">$799</p>
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
