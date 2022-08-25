import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "/images/melon_opacity.png";

const RecipeTopSection = () => {
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
          sx={{ color: "#3b5f4b", fontWeight: "bold", letterSpacing: 6 }}
          align="center"
          gutterBottom
        >
          RECIPES
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#8a944c", fontStyle: "italic" }}
          align="center"
          gutterBottom
        >
          select items from your fridge and we'll curate a recipe for you
        </Typography>

        <br />
      </Container>
    </Paper>
  );
};

export default RecipeTopSection;
