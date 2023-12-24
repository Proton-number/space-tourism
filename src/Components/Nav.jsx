import React from "react";
import { Box, Toolbar, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import logo from "/assets/logo-43040818.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-around",
        padding: "15px",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        id="desktop-logo"
        src={logo}
        sx={{ width: "50px", height: "50px" }}
      />

      <Box
        sx={{ backgroundColor: "grey", width: { lg: "30%" }, height: "1px" }}
      />

      <Box
        id="desktopNav"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(81.5485px)",
        }}
        elevation={3}
      >
        <Toolbar>
          <Stack direction="row" spacing={{ lg: 8 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography
                component={motion.p}
                whileHover={{ y: -4 }}
                sx={{ cursor: "pointer" }}
              >
                {" "}
                <b>00</b> Home{" "}
              </Typography>
            </Link>

            <Link
              to={"/Destination"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                component={motion.p}
                whileHover={{ y: -4 }}
                sx={{ cursor: "pointer" }}
              >
                {" "}
                <b>01</b> Destination{" "}
              </Typography>
            </Link>
            <Link
              to={"/Crew"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                component={motion.p}
                whileHover={{ y: -4 }}
                sx={{ cursor: "pointer" }}
              >
                {" "}
                <b>02</b> Crew{" "}
              </Typography>
            </Link>
            <Link
              to={"/Technology"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                component={motion.p}
                whileHover={{ y: -4 }}
                sx={{ cursor: "pointer" }}
              >
                {" "}
                <b>03</b> Technology{" "}
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Box>
    </Stack>
  );
}

export default Nav;
