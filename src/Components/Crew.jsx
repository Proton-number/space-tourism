import React, { useState } from "react";
import Nav from "./Nav";
import { Box, Stack, Typography } from "@mui/material";
import NavMobile from "./NavMobile";
import Douglas from "/src/assets/crew/image-douglas-hurley.webp";
import Mark from "/src/assets/crew/image-mark-shuttleworth.webp";
import Victor from "/src/assets/crew/image-victor-glover.webp";
import Anousheh from "/src/assets/crew/image-anousheh-ansari.webp";

const images = [`${Douglas}`, `${Mark}`, `${Victor}`, `${Anousheh}`];
const roles = ["COMMANDER", "MISSION SPECIALIST", "PILOT", "FLIGHT ENGINEER"];
const names = [
  "DOUGLAS HURLEY",
  "MARK SHUTTLEWORTH",
  "VICTOR GLOVER",
  "ANOUSHEH ANSARI",
];
const about = [
  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
];

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: 'url("/src/assets/crew/background-crew-mobile.jpg")',
          sm: 'url("/src/assets/crew/background-crew-tablet.jpg")',
          lg: 'url("/src/assets/crew/background-crew-desktop.jpg")',
        },
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Nav />
      <NavMobile />
          <Stack
              spacing={{xs:6, sm:8}}
        direction={{ lg: "row" }}
        sx={{
            alignItems: "center",
            padding: {
                xs:'54px',
              sm:'74px',
            lg: "80px",
            },
            textAlign:{xs:'center', sm:'center', lg:'left'}
        }}
      >
        <Stack spacing={2.4}>
          <Typography variant="h3" sx={{fontSize:{xs:'40px', sm:'58px', lg:'60px'}}}>
            <span style={{ opacity: "50%" }}>02</span> MEET YOUR CREW
          </Typography>
          <Typography variant="h3" sx={{fontSize:{xs:'30px',sm:'40px', lg:'50px'}}}> {roles[currentIndex]} </Typography>
          <Typography variant="h4" sx={{fontSize:{xs:'20px', sm:'30px', lg:'36px'}}}>{names[currentIndex]}</Typography>
          <Typography variant='p' sx={{ width: { lg: "60%" },fontSize:{xs:'16.4px', sm:'15.1px', lg:'18px'}  }}>
            {about[currentIndex]}
          </Typography>
                  <Stack spacing={2.2} direction="row" sx={{ justifyContent: {xs: 'center', lg:'left'} }}>
            <Box
              sx={{
                height: {xs:'20px', sm: "30px" },
                width: {xs:'20px', sm: "30px" },
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === 0 ? "white" : "rgba(0, 0, 0, 0.95)",
                "&:hover": {
                  backgroundColor: currentIndex === 0 ? "white" : "grey",
                },
              }}
              onClick={() => setCurrentIndex(0)}
            />
            <Box
              sx={{
                height: {xs:'20px', sm: "30px" },
                width: {xs:'20px', sm: "30px" },
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === 1 ? "white" : "rgba(0, 0, 0, 0.95)",
                "&:hover": {
                  backgroundColor: currentIndex === 1 ? "white" : "grey",
                },
              }}
              onClick={() => setCurrentIndex(1)}
            />
            <Box
              sx={{
                height: {xs:'20px', sm: "30px" },
                width: {xs:'20px', sm: "30px" },
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === 2 ? "white" : "rgba(0, 0, 0, 0.95)",
                "&:hover": {
                  backgroundColor: currentIndex === 2 ? "white" : "grey",
                },
              }}
              onClick={() => setCurrentIndex(2)}
            />
            <Box
              sx={{
                height: {xs:'20px', sm: "30px" },
                width: {xs:'20px', sm: "30px" },
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === 3 ? "white" : "rgba(0, 0, 0, 0.95)",
                "&:hover": {
                  backgroundColor: currentIndex === 3 ? "white" : "grey",
                },
              }}
              onClick={() => setCurrentIndex(3)}
            />
          </Stack>
        </Stack>
        <Box>
          <Box
            component="img"
            src={images[currentIndex]}
            sx={{ width: {xs:"180px",sm:'240px', lg: "440px" }, height: {sm:'240px', lg: "550px" } }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Crew;
