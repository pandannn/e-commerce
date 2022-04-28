import { Container } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { Flex, BorderTextNav } from "./style";

const AppBarTop = () => {
  return (
    <>
      <Container>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <BorderTextNav>
            <p>Seller Center</p>
            <p>Sell on Shopee</p>
            <p>Download</p>
            <p>Follow us on</p>
            <FacebookOutlinedIcon />
            <InstagramIcon />
          </BorderTextNav>
          <Flex
            sx={{ gap: "5px", margin: ".25rem", "& p": { padding: ".25rem" } }}
          >
            <NotificationsNoneIcon />
            <p>Notification</p>
            <HelpOutlineIcon />
            <p>Help</p>
            <LanguageIcon />
            <p>English</p>
            <BorderTextNav>
              <p>Sing Up</p>
              <p>Login</p>
            </BorderTextNav>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default AppBarTop;
