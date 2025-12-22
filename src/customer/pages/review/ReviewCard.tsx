import React from "react";
import { Avatar, Box, IconButton, Rating } from "@mui/material";
import { Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={9}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              Z
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibol text-lg">Card</p>
              <p className="opacity-70">2025-12-20</p>
            </div>
          </div>
          <Rating readOnly value={4} precision={1} />
          <p>value for money product, great product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
