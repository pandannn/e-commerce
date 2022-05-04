import React from "react";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container, Button, Typography } from "@mui/material";

const searchbar = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Container>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          bgcolor: "#ededed",
          alignItems: "center",
          p: "0.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        {/* <AppBar position="static"> */}
        <Typography sx={{ color: "#595959", paddingInlineEnd: "1rem" }}>
          Sort by
        </Typography>{" "}
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#FFFF",
            color: "#373737",
            "&:hover": {
              backgroundColor: "#bdbdbd",
              borderColor: "#bdbdbd",
              color: "black",
            },
          }}
        >
          Latest
        </Button>
        <Button variant="contained" color="primary" sx={{ bgcolor: "#f7472e" }}>
          TopSale
        </Button>
        {/* </AppBar>{" "} */}
        <FormControl sx={{ minWidth: 100 }}>
          <Select>
            <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
            <MenuItem value={10}>Low to High</MenuItem>
            <MenuItem value={20}>High to Low</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Container>
    // </Box>
  );
};
export default searchbar;
