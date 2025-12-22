import React from "react";

const CartItem = () => {
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
          <p className="text-sm">
            <strong>Quantity: </strong> 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
