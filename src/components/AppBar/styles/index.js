import { styled } from "@mui/system";

export const NavBar = styled("nav")({
  background: "linear-gradient(-180deg,#f53d2d,#f63)",
  "& *": {
    color: "#fff",
  },
});

export const Flex = styled("div")({
  display: "flex",
  "& *": {
    margin: 0,
  },
});

export const BorderSeparatedText = styled("div")({
  display: "flex",
  margin: ".25rem",
  "& p": {
    padding: "0.25rem",
    "&:nth-child(n+2)": {
      borderLeft: "1px solid hsla(0,0%,100%,.22)",
    },
  },
});
