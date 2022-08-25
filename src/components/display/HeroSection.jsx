import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "/images/full_peach.jpg";
import { Link } from "react-router-dom";
const buttonSx = {
  backgroundColor: "#f93f23",
  color: "white",
  margin: "3% auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};

const HeroSection = () => {
  return (
    <Paper
      sx={{
        padding: "8vh 0vh",
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
          sx={{ color: "333333" }}
          align="center"
          gutterBottom
        >
          Ever felt stumped when there's only expired food in your fridge?
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "333333" }}
          align="center"
          gutterBottom
        >
          No Fear! Fridge Daddy is here!
        </Typography>
        <br />
        <Button sx={buttonSx} size="large">
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
            Get Started!
          </Link>
        </Button>
      </Container>
    </Paper>
  );
};

export default HeroSection;
