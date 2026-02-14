import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { createDeal } from "../../../state/admin/dealSlice";

const CreateDealFrom = () => {
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector(store => store);

  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log("submit ", values);
      const reqData = {
        discount: values.discount,
        category: {
          id:values.category
        }
      }
      dispatch(createDeal(reqData))
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <Typography variant="h4" className="text-center">
        Create Deal
      </Typography>
      <TextField
        sx={{ marginBottom: "2rem" }}
        fullWidth
        name="discount"
        label="discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.errors.discount}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          sx={{ marginBottom: "2rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          {customer.homePageData?.dealCategories.map( item =><MenuItem value={item.id}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
      <Button fullWidth sx={{ py: ".99rem" }} type="submit" variant="contained">
        Create deal
      </Button>
    </Box>
  );
};

export default CreateDealFrom;
