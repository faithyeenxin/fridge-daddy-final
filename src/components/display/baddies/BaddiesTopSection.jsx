import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "/images/pomegranate_opacity.png";

const BaddiesTopSection = () => {
  return (
    <Paper
      sx={{
        padding: "15vh 0vh 15vh 0vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // borderRadius: "2%",
        margin: -1,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{ color: "#343928", fontWeight: "bold", letterSpacing: 6 }}
          align="center"
          gutterBottom
        >
          BADDIES
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#343928" }}
          align="center"
          gutterBottom
        >
          "I went to a German food festival and almost died from food poisoning"
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#343928", padding: "1vh 0vh", fontStyle: "italic" }}
          align="center"
          gutterBottom
        >
          " It was the wurst."
        </Typography>
        <br />
      </Container>
    </Paper>
  );
};

export default BaddiesTopSection;
