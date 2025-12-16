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
import React from "react";
import { colors } from "../../../data/filter/color";

const FilterSection = () => {
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
            {colors.map((i) => (
              <FormControlLabel value={i.name} control={<Radio />} label={`${i.name}`} />
            ))}
          </RadioGroup>
        </FormControl>
      </section>
    </div>
  );
};

export default FilterSection;
