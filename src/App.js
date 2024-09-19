import { NavBar } from "./components/NavBar";

import React from "react";
import { Box, Grid } from "@mui/material";
import lightsBg from "./images/lightsBg.webp";
import roomBg from "./images/roomBg.jpeg";
import roomBg1 from "./images/roomBg1.avif";
import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "./components/SkillsSection.js";
import Home from "./components/HomeSection.js";
import Projects from "./components/ProjectsSection.js";
import Contact from "./components/ContactSection.js";
import mattlogo from "./images/mattlogow.png";
import { useRef } from "react";
import { Opacity } from "@mui/icons-material";
import lousLogo from "./images/lousLogo.png";

function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const skillScroll = () => skillRef.current.scrollIntoView();
  const projectScroll = () => projectRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  return (
    <div>
      <NavBar
        homeScroll={homeScroll}
        skillScroll={skillScroll}
        projectScroll={projectScroll}
        contactScroll={contactScroll}
      ></NavBar>

      <Box
        ref={homeRef}
        style={{
          backgroundImage: `url(${roomBg1})`,
          //background: "white",
          height: "920px",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //backgroundPosition: "bottom",
        }}
      >
        <Grid container xs={12} height={70}></Grid>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Grid md={12} height={100}></Grid>
        </Box>
        <Home contactScroll={contactScroll}></Home>
      </Box>
      <Box
        sx={{
          background: " #ffffff",
        }}
      >
        <Box ref={skillRef}>
          <Grid container xs={12} height={100}></Grid>
          <Skills></Skills>
        </Box>
        <Grid container ref={projectRef}>
          <Grid container xs={12} height={100}></Grid>
          <Grid
            item
            xs={12}
            sx={{
              background: "rgb(250, 249, 246)",

              padding: 5,
            }}
          >
            <Projects></Projects>
          </Grid>
        </Grid>

        <Grid container xs={12} height={110}></Grid>
        <Contact></Contact>
        <Grid
          container
          xs={12}
          height={80}
          alignItems={"center"}
          justifyContent={"flex-end"}
          padding={2}
        >
          <Grid ref={contactRef} item>
            <LinkedInIcon
              sx={{ fontSize: "35px", color: "black", marginRight: "10px" }}
            />
            <InstagramIcon
              sx={{ fontSize: "35px", color: "black", marginRight: "10px" }}
            />
            <GitHubIcon
              sx={{ fontSize: "35px", color: "black", marginRight: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
