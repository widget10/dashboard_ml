import * as React from "react";
// import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import BellIcon from "@mui/icons-material/Notifications";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import NavigationData from "./constants";
import styled from "styled-components";

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  flex-direction: row;
  .MuiSvgIcon-root {
    margin-right: 8px;

    color: #a1a1a1;
  }
  .MuiBottomNavigationAction-label {
    color: #a1a1a1;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 32px;
  width: 32px;
  margin: 0px 16px;
`;

export default function Header() {
  return (
    <Box>
      <AppBar color="transparent">
        <Toolbar>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "20px", color: "#636363" }}
          >
            CRM Dash
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <BellIcon />
              </Badge>
            </IconButton>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <StyledAvatar>V</StyledAvatar>
            </Box>
          </Box>
        </Toolbar>

        <BottomNavigation
          sx={{ display: { xs: "none", md: "flex" } }}
          showLabels
          value={"/"}
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
        >
          {NavigationData.map((el) => (
            <StyledBottomNavigationAction
              icon={el.icon}
              label={el.label}
              value={el.value}
              className="active"
            />
          ))}
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
