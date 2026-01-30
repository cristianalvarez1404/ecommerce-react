import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../state/store";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigation = useNavigate();
  const { auth } = useAppSelector(store => store);

  return (
    <>
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-300">
          <div className="flex items-center gap-2 lg:gap-6">
            {!isLarge && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
            <h1
              className="logo cursor-pointer text-lg md:text-2xl text-[#00927c]"
              onClick={() => navigation("/")}
            >
              Ecommerce
            </h1>
          </div>
          <ul className="h-[70px] flex items-center font-medium text-gray-800 justify-between gap-6">
            {mainCategory.map((item,index) => (
              <li 
                key={item.categoryId}
                onMouseLeave={() => setShowCategorySheet(false)}
                onMouseEnter={() => {
                  setShowCategorySheet(true);
                  setSelectedCategory(item.categoryId);
                }}
                className="mainCategory hover:text-[#00927c] cursor-pointer hover:border-b-2 px-4 border-[#00927c]"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {auth.user ? (
              <Button
                onClick={() => navigation("/account")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
                />
                <h1 className="font-semibold hidden lg:block">
                  {auth.user?.fullName}
                  {auth.user?.email}
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigation("/login")} variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigation("/cart")}>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button
                onClick={() => navigation("/become-seller")}
                startIcon={<Storefront />}
                variant="outlined"
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border border-slate-200"
          >
            <CategorySheet
              selectedCategory={selectedCategory}
              setShowSheet={setSelectedCategory}
            />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;
