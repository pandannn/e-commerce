import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
