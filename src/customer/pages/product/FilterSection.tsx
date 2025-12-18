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

  const clearAllFilters = () => {
    searchParams.forEach((value:any, key: any) => {
      searchParams.delete(key)
    })
    setSearchParams(searchParams);
  }

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-10 px-9 lg:border-r lg:border-gray-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
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
            onChange={updateFilterParams}
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
            name="price"
            onChange={updateFilterParams}
            aria-labelledby="price"
            defaultValue=""
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
              pb: "14px",
              color: teal[600],
            }}
            className="text-2xl font-semibold"
            id="brand"
          >
            Discount
          </FormLabel>
          <RadioGroup
            name="discount"
            onChange={updateFilterParams}
            aria-labelledby="discount"
            defaultValue=""
          >
            {discount.map((item,index) => (
              <FormControlLabel
                key={item.name}
                value={item.value}
                control={<Radio size="small"/>}
                label={item.name}
              />
            ))
            }
          </RadioGroup>
        </FormControl>
      </section>
      </div>
    </div>
  );
};

export default FilterSection;
