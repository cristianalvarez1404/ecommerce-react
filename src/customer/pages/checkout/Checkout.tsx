import React, { useState } from "react";
import AddressCard from "./AddressCard";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PricingCart from "../cart/PricingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "RAZORPAY",
    image: "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
    label: "",
  },
  {
    value: "STRIPE",
    image: "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGatway, setPaymentGatway] = useState("RAZORPAY");

  const handlePaymentChange = (e: any) => {
    setPaymentGatway(e.target.value);
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>
            <div className="py-4 px-5 rounded-md border border-gray-300">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border border-gray-400 p-5 rounded-md">
                <h1 className="text-teal-600 font-medium my-2 text-center">
                  Chose Payment Gatway
                </h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex items-center justify-between mx-4"
                  onChange={handlePaymentChange}
                  value={paymentGatway}
                >
                  {paymentGatwayList.map((e) => (
                    <FormControlLabel
                      className="border border-gray-400 w-[45%] px-2 rounded-md flex justify-center"
                      value={e.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            e.value === "stripe" ? "w-14 " : "w-14 "
                          } object-cover`}
                          src={e.image}
                          alt={e.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border border-gray-400 rounded-md">
              <PricingCart />
              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddressForm />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Checkout;
