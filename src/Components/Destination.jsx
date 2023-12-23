import React, { useState } from "react";
import Nav from "./Nav";
import { Box, Stack, Typography } from "@mui/material";
import NavMobile from "./NavMobile";
import moon from "/public/assets/destination/image-moon.png";
import mars from "/public/assets/destination/image-mars.png";
import titan from "/public/assets/destination/image-titan.png";
import europa from "/public/assets/destination/image-europa.png";

const images = [`${moon}`, `${mars}`, `${europa}`, `${titan}`];
const place = ["MOON", "MARS", "EUROPA", "TITAN"];
const text = [
  "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
];
const distance = ["384,400 KM", "225 MIL. KM", "628 MIL. KM", "1.6 BIL. KM"];
const time = ["3 DAYS", "9 MONTHS", "3 YEARS", "7 YEARS"];

function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: 'url("/public/assets/destination/background-destination-mobile.jpg")',
            sm: 'url("/public/assets/destination/background-destination-tablet.jpg")',
            lg: 'url("/public/assets/destination/background-destination-desktop.jpg")',
          },
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Nav />
        <NavMobile />

        <Stack
          spacing={{ xs: 4, sm: 15, lg: 24 }}
          direction={{
            xs: "column",
            lg: "row",
          }}
          sx={{
            display: "flex",
            placeItems: "center",
            justifyContent: {
              xs: "center",
              lg: "space-around",
            },
            alignItems: "center",
            padding: {
              xs: "50px",
              sm: "70px",
              lg: "80px",
            },
          }}
        >
          <Stack spacing={4} sx={{ alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "21px", lg: "34px" } }}
            >
              {" "}
              <span style={{ opacity: "50%" }}>01</span> PICK YOUR DESTINATION{" "}
            </Typography>
            <Box
              component="img"
              src={images[currentIndex]}
              sx={{ width: { xs: "300px", sm: "", lg: "480px" } }}
            />
          </Stack>

          <Stack
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              textAlign: { xs: "center", sm: "center", lg: "left" },
            }}
            spacing={4}
          >
            <Stack direction="row" spacing={{ xs: 4, sm: 6 }}>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => setCurrentIndex(0)}
              >
                MOON
              </Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => setCurrentIndex(1)}
              >
                MARS
              </Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => setCurrentIndex(2)}
              >
                EUROPA
              </Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => setCurrentIndex(3)}
              >
                TITAN
              </Typography>
            </Stack>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "71px", lg: "100px" } }}
            >
              {place[currentIndex]}
            </Typography>
            <Typography>{text[currentIndex]}</Typography>
            <Stack direction="row" spacing={6}>
              <Stack>
                <Typography>AVG. DISTANCE</Typography>
                <Typography>{distance[currentIndex]}</Typography>
              </Stack>
              <Stack>
                <Typography>EST. TRAVEL TIME</Typography>
                <Typography>{time[currentIndex]}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Destination;
