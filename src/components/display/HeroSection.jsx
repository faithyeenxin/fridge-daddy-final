import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "/images/full_peach.jpg";

const backgroundSx = {
  height: 550,
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  m: -1,
};

const buttonSx = {
  backgroundColor: "#f93f23",
  margin: "0 auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};

// style={{
//     padding: "20vh 5vh 15vh 5vh",
//   }}

const HeroSection = () => {
  return (
    <Box sx={backgroundSx}>
      <div
        style={{
          marginTop: 2,
          padding: "15vh 5vh",
        }}
      >
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
      </div>
    </Box>
  );
};

export default HeroSection;
