import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./theme/customTheme";
import Home from "./customer/pages/home/Home";
import Product from "./customer/pages/product/Product";
import PageDetails from "./customer/pages/pageDetails/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home/> */}
        {/* <Product/> */}
        <PageDetails/>
      </div>
    </ThemeProvider>
  );
}

export default App;
