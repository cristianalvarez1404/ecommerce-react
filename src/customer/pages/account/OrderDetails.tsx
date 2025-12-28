import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Order</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            suscipit nesciunt inventore magni nobis delectus distinctio
            necessitatibus. Earum, totam deleniti?
          </p>
          <p>
            <strong>Size:</strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="border border-gray-400 p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
    </Box>
  );
};

export default OrderDetails;
