import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border border-gray-400 rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-teal-600">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Virani Clothing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aperiam
            dolorem ea, inventore delectus sit?
          </p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
