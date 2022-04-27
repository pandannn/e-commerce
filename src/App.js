import "./App.css";
import Home from "./pages/Home";
import CatalogDetail from "./pages/CatalogDetail";
import Theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        {/* <CatalogDetail /> */}
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
