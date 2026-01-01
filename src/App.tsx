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
import UserDetails from "./customer/pages/account/UserDetails";
import { Route, Routes } from "react-router-dom";
import OrderDetails from "./customer/pages/account/OrderDetails";
import Orders from "./customer/pages/account/Orders";
import Address from "./customer/pages/account/Address";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <PageDetails/> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<PageDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
