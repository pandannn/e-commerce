import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Box } from "@mui/system";

const products = [
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/b539ece45da272d8526efe6d4f8fbe8a",
    name: "Sneakers",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/3244e9062e200bfef72b2cb16dd86ade",
    name: "Sneakers",
    author: "asd",
    price: "100",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "50",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "350",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "200",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    name: "Sneakers",
    author: "asd",
    price: "100",
  },
];
const catalog = () => {
  return (
    // <>
    //   <ImageList
    //     sx={{ height: 500, overflow: "hidden" }}
    //     cols={5}
    //     rowHeight={164}
    //   >
    //     {itemData.map((item) => (
    //       <ImageListItem key={item.img}>
    //         <img
    //           src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
    //           srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //           alt={item.title}
    //           loading="lazy"
    //         />
    //         <ImageListItemBar
    //           title={item.title}
    //           subtitle={<span>by: {item.author}</span>}
    //           position="below"
    //         />
    //         </ImageListItem>
    //     ))}
    //   </ImageList>
    // </>
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
