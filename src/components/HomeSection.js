import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import homeDawg from "../images/homeDawg.jpg";

import React from "react";

export default function Home({ contactScroll }) {
  return (
    <Grid container sx={{ maxWidth: "95%", margin: "auto" }}>
      <Grid item xs={12} height={0}></Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "rgb(250, 249, 246, .85)",

          borderRadius: "5%",
          padding: 3,
          marginTop: 3,
        }}
      >
        <Paper
          sx={{
            background:
              "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
            //bgcolor: "#1565C0",
            p: 0.7,
            m: 1,
          }}
        >
          <Typography
            color="white"
            fontWeight={500}
            fontFamily={"Noto Serif"}
            textAlign={"center"}
          >
            Professional Portraits for People and Pets
          </Typography>
        </Paper>
        <Typography
          color="black"
          fontWeight={700}
          fontSize={60}
          textAlign={"center"}
          lineHeight={1}
          padding={2}
          fontFamily={"Noto Serif"}
        >
          Welcome to Lou's Painting's
        </Typography>
        <Typography
          color="black"
          fontWeight={700}
          fontSize={18}
          textAlign={"center"}
          marginTop={0}
          padding={2}
          fontFamily={"Noto Serif"}
          //bgcolor={"whitesmoke"}
        >
          San Diego based artist Louis Farace has been painting and drawing for
          over 20 years. Using mainly acrylics, Lou paints portraits, pets, and
          landscapes utilizing a realistic yet distinct style. Lou has worked in
          art restoration for over 15 years, restoring thousands of paintings,
          portraits, posters, and sculptures.
        </Typography>
        <Button
          onClick={contactScroll}
          variant="outlined"
          disableElevation
          endIcon={<SendIcon />}
          sx={{
            color: "black",
            borderWidth: "2px",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          <Typography fontWeight={700} fontSize={20}>
            Place Order
          </Typography>
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          alt="astronaut"
          className="astronaut"
          //height={370}
          width={370}
          height={330}
          style={{
            borderRadius: "5%",
            marginTop: "20px",
          }}
          src={homeDawg}
        />
      </Grid>
    </Grid>
  );
}
