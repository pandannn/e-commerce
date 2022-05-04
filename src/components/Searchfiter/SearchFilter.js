import React from "react";
import { Container, FormControlLabel, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FlexCol, FlexRow } from "./style";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

const SearchFilter = () => {
  return (
    <main>
      <Container>
        <FlexRow>
          <FilterAltIcon />
          <p>SEARCH FILTHER</p>
        </FlexRow>
        <FlexCol>
          <p>By Category</p>
          <FormControlLabel label="T-shirts" control={<Checkbox />} />
          <FormControlLabel label="Sneakers" control={<Checkbox />} />
        </FlexCol>
        {/* <Flex>
            <Flex sx={{ flexDirection: "column" }}>
            <p>Price Range</p>
            <TextField id="filled-basic" variant="filled" />
            <TextField id="filled-basic" variant="filled" />
          </Flex>
          </Flex> */}
        <FlexCol>
          <p>Rating</p>
          <Rating name="five-rating" defaultValue={5} precision={1} />
          <Rating name="four-rating" defaultValue={4} precision={1} />
          <Rating name="three-rating" defaultValue={3} precision={1} />
          <Rating name="two-rating" defaultValue={2} precision={1} />
          <Rating name="one-rating" defaultValue={1} precision={1} />
        </FlexCol>
        <Button
          variant="contained"
          sx={{ bgcolor: "#ee4d2d", marginTop: "1.5rem" }}
        >
          CLEAR ALL
        </Button>
      </Container>
    </main>
  );
};

export default SearchFilter;
