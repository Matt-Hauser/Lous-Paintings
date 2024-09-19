import { Box, Grid, Typography } from "@mui/material";
import SkillsCar from "./Carousel.js";
import React from "react";

export default function Skills() {
  return (
    <Grid container sx={{ maxWidth: "90%", margin: "auto" }}>
      <Grid item xs={12}>
        <Box
          //border={5}

          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={"80vw"}
            borderRadius={10}
            justifyContent={"center"}
            textAlign={"center"}
            padding={5}
            sx={{ background: "rgb(250, 249, 246)" }}
          >
            <Typography
              color="black"
              fontSize={50}
              fontFamily={"Noto Serif"}
              fontWeight={700}
              margin={2}
            >
              Keepsakes for a Lifetime
            </Typography>
            <Typography
              color="black"
              fontFamily={"Noto Serif"}
              fontSize={20}
              fontWeight={500}
            >
              Discover the joy of owning a custom portait that not only captures
              the likeness of your pets and family but also immortalizes the
              love and happiness they bring into your life. Let us be your
              artistic partner, bringing your vision to life sand transforming
              your treasured moments into timeless works of art.
            </Typography>

            <Box marginTop={5}>
              <SkillsCar></SkillsCar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
