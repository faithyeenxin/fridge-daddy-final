import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "/images/avocado_opacity.png";

const EvergreenTopSection = () => {
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
          sx={{ color: "#518655", fontWeight: "bold", letterSpacing: 6 }}
          align="center"
          gutterBottom
        >
          EVERGREEN
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#f1bc76" }}
          align="center"
          gutterBottom
        >
          "Life expectancy would grow by leaps and bounds if green vegetables
          smelled as good as bacon."
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#f1bc76", padding: "1vh 0vh", fontStyle: "italic" }}
          align="center"
          gutterBottom
        >
          - Doug Larson
        </Typography>
        <br />
      </Container>
    </Paper>
  );
};

export default EvergreenTopSection;
