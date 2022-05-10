import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Box } from "@mui/system";

const products = [
  {
    img: "https://cf.shopee.co.th/file/5782309c0c03e1b377bdd8c99f04bd20",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/b539ece45da272d8526efe6d4f8fbe8a",
    name: "Shirts",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/3244e9062e200bfef72b2cb16dd86ade",
    name: "Shirts",
    author: "asd",
    price: "100",
  },
  {
    img: "https://cf.shopee.co.th/file/57f981c69f7b8c18d6e54ed83a7b8519_tn",
    name: "Shirts",
    author: "asd",
    price: "50",
  },
  {
    img: "https://cf.shopee.co.th/file/785e63c18eb32de6f04a6f583246e22f",
    name: "Shirts",
    author: "asd",
    price: "350",
  },
  {
    img: "https://cf.shopee.co.th/file/3d3ddc4644d5e23d0af8ba9047c3b48a",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/7546debc10c086010f758ec088ad8694",
    name: "Sneakers",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/ad1bb602bb77ffe369b2f63b00e3d0f1",
    name: "Sneakers",
    author: "asd",
    price: "200",
  },
  {
    img: "https://cf.shopee.co.th/file/21aef62612bf304f22c1ad113acbfb63",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/39dcc87686621a8008ba11a968a0eda0",
    name: "Shirts",
    author: "asd",
    price: "100",
  },
];
const catalog = () => {
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "1%",
              justifyContent: "space-between",
            }}
          >
            {products.map((product) => (
              <CardActionArea sx={{ width: "19%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    molestiae fugit, velit temporibus <br />
                    Price: {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            ))}
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default catalog;
