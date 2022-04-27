import { Button, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Link from "@mui/material/Link";
import React from "react";

const preventDefault = (event) => event.preventDefault();

const itemData = [
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "100",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "50",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "350",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "250",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "200",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "150",
  },
  {
    img: "https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23",
    title: "Sneakers",
    author: "asd",
    price: "100",
  },
];
const catalog = () => {
  return (
    <>
      <ImageList
        sx={{ height: 500, overflow: "hidden" }}
        cols={5}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
            <Button>Find Similar</Button>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default catalog;
