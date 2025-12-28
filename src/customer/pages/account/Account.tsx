import { Divider } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account/profile" },
  { name: "saved cards", path: "/account/saved-card" },
  { name: "addresses", path: "/account/addresses" },
  { name: "logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Ecommerce</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-col-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r lg:border-r-gray-400 lg:pr-5 py-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname ? "bg-teal-600 text-white" : ""
              } py-3 cursor-pointer hover:bg-teal-600 hover:text-white px-5 rounded-md border-b border-b-gray-200`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="right lg:cols-span-2 lg:pl-5 py-5">
          {/* <Orders /> */}
          <OrderDetails />
        </section>
      </div>
    </div>
  );
};

export default Account;
