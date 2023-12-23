import React, { useState } from "react";
import Nav from "./Nav";
import { Box, Stack, Typography } from "@mui/material";
import NavMobile from "./NavMobile";
import launchVehicle from "assets/technology/image-launch-vehicle-landscape.jpg";
import spacePort from "assets/technology/image-spaceport-landscape.jpg";
import spaceCapsule from "assets/technology/image-space-capsule-landscape.jpg";
import launchVehiclePortrait from "assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPortrait from "assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "assets/technology/image-space-capsule-portrait.jpg";

const images = [`${launchVehicle}`, `${spacePort}`, `${spaceCapsule}`];
const potraitImages = [
  `${launchVehiclePortrait}`,
  `${spacePortPortrait}`,
  `${spaceCapsulePortrait}`,
];

const terminology = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];
const about = [
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
];

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: 'url("assets/technology/background-technology-mobile.jpg")',
          sm: 'url("assets/technology/background-technology-tablet.jpg")',
          lg: 'url("assets/technology/background-technology-desktop.jpg")',
        },
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Nav />
      <NavMobile />
      <Stack
        sx={{
          padding: {
            lg: "80px",
          },
        }}
      >
        <Typography variant='h3'> 
          {" "}
          <span style={{ opacity: "50%" }}>03</span> SPACE LAUNCH 101
        </Typography>

        <Stack spacing={3} direction="row" sx={{alignItems:'center'}}>
          <Stack spacing={3} direction="row" sx={{alignItems:'center'}}>
            <Stack spacing={3}>
              <Box
                onClick={() => setCurrentIndex(0)}
                sx={{
                  height: "40px",
                  width: "40px",
                  color: currentIndex === 0 ? "rgba(0, 0, 0, 0.95)" : "white",
                  backgroundColor:
                    currentIndex === 0 ? "white" : "rgba(0, 0, 0, 0.95)",
                  "&:hover": {
                    backgroundColor: currentIndex === 0 ? "white" : "grey",
                  },
                  borderRadius: "50%",
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
                >
                  1
                </Typography>
              </Box>
              <Box
                onClick={() => setCurrentIndex(1)}
                sx={{
                  height: "40px",
                  width: "40px",
                  color: currentIndex === 1 ? "rgba(0, 0, 0, 0.95)" : "white",
                  backgroundColor:
                    currentIndex === 1 ? "white" : "rgba(0, 0, 0, 0.95)",
                  "&:hover": {
                    backgroundColor: currentIndex === 1 ? "white" : "grey",
                  },
                  borderRadius: "50%",
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
                >
                  2
                </Typography>
              </Box>
              <Box
                onClick={() => setCurrentIndex(2)}
                sx={{
                  height: "40px",
                  width: "40px",
                  color: currentIndex === 2 ? "rgba(0, 0, 0, 0.95)" : "white",
                  backgroundColor:
                    currentIndex === 2 ? "white" : "rgba(0, 0, 0, 0.95)",
                  "&:hover": {
                    backgroundColor: currentIndex === 2 ? "white" : "grey",
                  },
                  borderRadius: "50%",
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
                >
                  3
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Typography variant='h4'>THE TERMINOLOGY</Typography>
              <Typography variant='h5'>{terminology[currentIndex]}</Typography>
              <Typography>{about[currentIndex]}</Typography>
            </Stack>
          </Stack>
          <Box>
            <Box component="img" src={images[currentIndex]} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Technology;
