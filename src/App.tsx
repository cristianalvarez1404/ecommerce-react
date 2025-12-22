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

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <PageDetails/> */}
        {/* <Review /> */}
        <Cart />
      </div>
    </ThemeProvider>
  );
}

export default App;
