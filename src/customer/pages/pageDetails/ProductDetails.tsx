import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1, 1].map((_) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
              alt=""
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-teal-500">Clothing</h1>
          <p className="text-gray-500 font-semibold">men black shirt</p>
          <div className="flex justify-between items-center py-2 border border-gray-200 w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">$400</span>
              <span className="line-through text-gray-400">$999</span>
              <span className="text-teal-500 font-semibold">60%</span>
            </div>
            <p className="text-sm">
              Inclusive of all taxes. Free shipping above $500.
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free shipping & returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity((prev) => --prev)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity((prev) => ++prev)}>
                <AddIcon />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Whishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              explicabo tenetur unde culpa. Dolorum suscipit ratione est
              reiciendis aspernatur blanditiis adipisci possimus magni veritatis
              tenetur consequatur tempora fugit, nisi quisquam.
            </p>
          </div>
          <div className="mt-7">
            <ReviewCard />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
