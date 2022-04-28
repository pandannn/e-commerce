import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  primary: "#ee4d2d",
  // secondary: ,

  text: {
    primary: "#333333",
    secondary: "#636363",
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        containedPrimary: {
          // Some CSS
          "&:hover": {
            backgroundColor: "#ff6242",
            borderColor: "#ff6242",
            color: "#fff",
            boxShadow: "none",
          },
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
