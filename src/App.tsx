import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./theme/customTheme";
import Home from "./customer/pages/home/Home";
import Product from "./customer/pages/product/Product";
import PageDetails from "./customer/pages/pageDetails/ProductDetails";
import Review from "./customer/pages/review/Review";
import Cart from "./customer/pages/cart/Cart";
import Checkout from "./customer/pages/checkout/Checkout";
import Account from "./customer/pages/account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import SellerDashboard from "./seller/pages/sellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/pages/dashboard/AdminDashboard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./state/store";
import { fetchSellerProfile } from "./state/seller/sellerSlice";
import Auth from "./customer/pages/auth/Auth";
import { fetchUserProfile } from "./state/authSlice";
import PaymentSuccess from "./customer/pages/payment/PaymentSuccess";
import WishList from "./customer/wishlist/WishList";

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector(store => store); 
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem('jwt') || ""))
  }, [])

  useEffect(() => {
    if(seller.profile){
      navigate("/seller")
    }
  }, [seller.profile])

  useEffect(() => {
    dispatch(fetchUserProfile({ jwt:auth.jwt || localStorage.getItem("jwt") }))
  }, [auth.jwt])

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<PageDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success/:orderId" element={<PaymentSuccess />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
