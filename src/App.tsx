import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./theme/customTheme";
import Home from "./customer/pages/home/Home";
import Product from "./customer/pages/product/Product";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home/> */}
        <Product/>
      </div>
    </ThemeProvider>
  );
}

export default App;
