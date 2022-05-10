import "./App.css";
// import Home from "./pages/Home";
import Product from "./pages/Product";
// import Cart from "./pages/Cart";
import Theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        {/* <Cart /> */}
        <Product />
        {/* <Home /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
