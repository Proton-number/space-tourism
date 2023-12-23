import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/src/assets/logo-43040818.svg";
import { Link } from "react-router-dom";

function NavMobile() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(81.5485px)",
          padding: "5px",
        }}
        elevation={3}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              sx={{ width: "50px", height: "50px" }}
            />
          </Stack>

          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        PaperProps={{
          sx: {
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.125)",
          },
        }}
        id="drawer"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="350px" role="presentation">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              color="white"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>

          <Stack
            spacing={8}
            style={{ textAlign: "center", color: "white", padding: "35px" }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography sx={{ cursor: "pointer" }}>
                {" "}
                <b>00</b> Home{" "}
              </Typography>
            </Link>

            <Link
              to={"/Destination"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ cursor: "pointer" }}>
                {" "}
                <b>01</b> Destination{" "}
              </Typography>
            </Link>
            <Link
              to={"/Crew"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ cursor: "pointer" }}>
                {" "}
                <b>02</b> Crew{" "}
              </Typography>
            </Link>
            <Link
              to={"/Technology"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ cursor: "pointer" }}>
                {" "}
                <b>03</b> Technology{" "}
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default NavMobile;
