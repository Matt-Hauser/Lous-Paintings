import { Grid, Paper, Typography } from "@mui/material";
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
        flexDirection={"column"}
      >
        <img alt="contact me" src={contact} width={400} height={370} />

        <Paper sx={{ p: 0.5, backgroundColor: "whitesmoke" }}>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              active: { color: "black" },
              fontSize: 14,
            }}
            href="https://www.freepik.com/free-vector/woman-personal-profile-employer-holding-job-candidate-cv-employee-resume-isolated-flat-design-element-medical-clinic-hospital-patient-card-concept-illustration_11667128.htm#fromView=author&page=1&position=36&uuid=df9ba1a6-15c6-45a6-9427-1ba6f0900b86"
          >
            Image by vectorjuice on Freepik
          </a>
        </Paper>
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
