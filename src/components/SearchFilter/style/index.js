import { styled } from "@mui/system";

export const FlexRow = styled("div")({
  display: "flex",
  flexDirection: "row",
  "& *": {
    margin: 0,
    fontWeight: 900,
    marginTop: "1.5rem",
  },
});
export const FlexCol = styled("div")({
  display: "flex",
  flexDirection: "column",
  "& p": {
    margin: 0,
    fontWeight: 100,
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
});
