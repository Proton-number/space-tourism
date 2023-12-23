import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: 'url("/public/assets/home/background-home-mobile.jpg")',
          sm: 'url("/public/assets/home/background-home-tablet.jpg")',
          lg: 'url("/public/assets/home/background-home-desktop.jpg")',
        },
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <NavMobile />
      <Stack
        spacing={{ xs: 6, sm: 8 }}
        direction={{
          xs: "column",
          lg: "row",
        }}
        sx={{
          textAlign: {
            xs: "center",
            lg: "left",
          },
          justifyContent: {
            lg: "space-around",
          },
          alignItems: "center",
          padding: {
            xs: "60px",
            sm: "68px",
            lg: "80px",
          },
        }}
      >
        <Stack spacing={4} sx={{ width: { lg: "40%" } }}>
          <Typography variant="h5">SO, YOU WANT TO TRAVEL TO </Typography>
          <Typography variant="h1">SPACE</Typography>
          <Typography variant="body1">
            Let's face it; if you want to go to space, you might as well
            genuiely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!{" "}
          </Typography>
        </Stack>

        <Box
          sx={{
            backgroundColor: "white",
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            color: "black",
            position: "relative",
            zIndex: "3",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            variant="h3"
          >
            EXPLORE
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Home;
