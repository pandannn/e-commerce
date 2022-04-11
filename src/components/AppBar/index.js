import React from "react";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BorderSeparatedText, Flex, NavBar } from "./styles";

const AppBar = () => {
  return (
    <NavBar>
      <Container>
        <Flex sx={{ justifyContent: "space-between" }}>
          <BorderSeparatedText>
            <p>Seller Centre</p>
            <p>Sell on Shoppee</p>
            <p>Download</p>
            <p>Follow us on</p>
            <SvgIcon component={FacebookIcon} />
            <SvgIcon component={InstagramIcon} />
          </BorderSeparatedText>

          <Flex
            sx={{
              gap: ".5rem",
              margin: ".25rem",
              "& p": { padding: ".25rem" },
            }}
          >
            <p>Notification</p>
            <p>Help</p>
            <p>English</p>

            <BorderSeparatedText>
              <p>Sign Up</p>
              <p>Login</p>
            </BorderSeparatedText>
          </Flex>
        </Flex>

        <Flex></Flex>
      </Container>
    </NavBar>
  );
};

export default AppBar;
