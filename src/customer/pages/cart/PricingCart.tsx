import { Divider } from "@mui/material";
import React from "react";

const PricingCart = () => {
  return (
    <>
      <div className="space-y-3 p-5 text-gray-600">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>$899</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>$600</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>$69</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Plateform fee</span>
          <span>Free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-teal-600">
        <span>Total</span>
        <span>$69</span>
      </div>
    </>
  );
};

export default PricingCart;
