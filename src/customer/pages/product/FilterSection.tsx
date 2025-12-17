import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { colors } from "../../../data/filter/color";
import { brands } from "../../../data/filter/brand";
import { discount } from "../../../data/filter/discount";
import { price } from "../../../data/filter/price";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const  [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = (e:any) => {
    setExpendColor(!expendColor)
  }

  const updateFilterParams = (e:any) => {
    const {value, name} = e.target;
    if(value) {
      searchParams.set(name, value);
    }
    else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams)
  }


  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-10 px-9 lg:border-r lg:border-gray-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          size="small"
          className="text-teal-500 cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: teal[500],
              pb: "14px",
            }}
            className="text-2xl font-semibold"
            id="color"
          >
            Color
          </FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"
          >
            {colors.slice(0,expendColor ? colors.length : 5 ).map((i) => (
              <FormControlLabel value={i.name} control={<Radio />} 
              label={
                <div className="flex items-center gap-3">
                  <p>{i.name}</p>
                  <p style={{backgroundColor:i.hex}} 
                  className={`h-5 w-5 rounded-full ${i.name === "White" ? "border" : ""}`}>
                    
                  </p>
                </div>
              } />
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          <button 
            className="text-teal-500 cursor-pointer hover:text-teal-900 flex items-center"
            onClick={handleColorToggle}
            >
            {expendColor ? "Hide" : `+${colors.length - 5} more`}
          </button>
        </div>
      </section>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: teal[500],
              pb: "14px",
            }}
            className="text-2xl font-semibold"
            id="color"
          >
            Price
          </FormLabel>
          <RadioGroup
            aria-labelledby="price"
            defaultValue=""
            name="price"
            onChange={updateFilterParams}
          >
            {price.map((i) => (
              <FormControlLabel
                key={i.name} 
                value={i.value} 
                control={<Radio size="small"/>}
                label = {i.name} 
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          <button 
            className="text-teal-500 cursor-pointer hover:text-teal-900 flex items-center"
            // onClick={handleColorToggle}
            >
            {expendColor ? "Hide" : `+${price.length - 5} more`}
          </button>
        </div>
      </section>
      </div>
      <Divider/>
      <div className="px-9 space-y-6">
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: teal[500],
              pb: "14px",
            }}
            className="text-2xl font-semibold"
            id="color"
          >
            Brands
          </FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"
          >
            {brands.map((i) => (
              <FormControlLabel value={i.name} control={<Radio />} 
              label={
                <div className="flex items-center gap-3">
                  <p>{i.name}</p>
                  <p className={`h-5 w-5 rounded-full`}>
                  </p>
                </div>
              } />
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          <button 
            className="text-teal-500 cursor-pointer hover:text-teal-900 flex items-center"
            // onClick={handleColorToggle}
            >
            {expendColor ? "Hide" : `+${brands.length - 5} more`}
          </button>
        </div>
      </section>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: teal[500],
              pb: "14px",
            }}
            className="text-2xl font-semibold"
            id="color"
          >
            Discount
          </FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"  
          >
            {discount.map((i) => (
              <FormControlLabel value={i.name} control={<Radio />} 
              label={
                <div className="flex items-center gap-3">
                  <p>{i.name}</p>
                  <p 
                  className={`h-5 w-5 rounded-full`}>
                  </p>
                </div>
              } />
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          <button 
            className="text-teal-500 cursor-pointer hover:text-teal-900 flex items-center"
            // onClick={handleColorToggle}
            >
            {expendColor ? "Hide" : `+${discount.length - 5} more`}
          </button>
        </div>
      </section>
      </div>
      
    </div>
  );
};

export default FilterSection;
