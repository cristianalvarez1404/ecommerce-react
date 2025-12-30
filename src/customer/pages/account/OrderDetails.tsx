import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

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
      <div className="border border-gray-400 p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>Joe</p>
            <Divider flexItem orientation="vertical" />
            <p>{9283834840}</p>
          </div>
          <p>Somewhere, in a street 78 - 5055</p>
        </div>
      </div>
      <div className="border border-gray-400 space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total item price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                $123 on this item
              </span>
            </p>
          </div>
          <p className="font-medium">$123.00</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>Pay on delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong>Joe
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={true}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {true ? "Order canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
