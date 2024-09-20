import { Grid, Typography } from "@mui/material";
import React from "react";
import { ContactForm } from "./ContactForm";
import contact from "../images/contact3.png";

export default function Contact() {
  return (
    <Grid
      container
      justifyContent={"space-around"}
      display={"flex"}
      flexWrap={"wrap"}
      padding={3}
    >
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <img alt="contact me" src={contact} width={400} height={370} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        marginTop={4}
        //sx={{ backgroundColor: "whitesmoke" }}
        padding={3}
        borderRadius={"2%"}
      >
        <Grid item xs={12} /*textAlign={"center"}*/>
          <Typography
            fontFamily={"Noto Serif"}
            fontSize={50}
            fontWeight={500}
            sx={{ color: "black" }}
          >
            Place an Order
          </Typography>
          <Typography fontFamily={"Noto Serif"}>
            Fill in your contact information below and leave me a short but
            detailed request for your personal painting. Please include any
            relevant images and sizing options("8x10", "9x12", or "11x14"). I
            will respond shortly to review your order and confirm
            details/pricing.
          </Typography>
        </Grid>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
