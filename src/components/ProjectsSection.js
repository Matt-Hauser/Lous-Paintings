import React from "react";
import louBio from "../images/louBio.jpg";
import { Box, Typography } from "@mui/material";
export default function Projects() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Typography
        color="black"
        fontFamily={"Noto Serif"}
        fontSize={40}
        fontWeight={700}
        margin={2}
      >
        About The Artist
      </Typography>
      <Typography
        fontFamily={"Noto Serif"}
        color="black"
        fontSize={20}
        fontWeight={500}
      >
        Lou currently holds a Bachelor’s degree in Human Development, and is
        working on a Master’s in Psychology, while working as a behavior
        therapist and artist. Combining his love of animals and people with his
        love of art, Lou’s Paintings was created in 2019 and has since created
        over 300 commissioned paintings.
      </Typography>
      <img
        alt="Lou's Bio Picture"
        style={{ marginTop: "30px" }}
        src={louBio}
      ></img>
    </Box>
  );
}
