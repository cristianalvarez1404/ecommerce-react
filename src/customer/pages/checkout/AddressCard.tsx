import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (e) => {};
  return (
    <div className="flex mt-5 p-5 border border-gray-300 rounded-md">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Customer</h1>
        <p className="w-[320px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p>
          <strong>Mobile: </strong> 123456789
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
