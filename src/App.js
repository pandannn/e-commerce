import Home from "./pages/Home";
import Theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
