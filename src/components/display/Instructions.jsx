import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import Gif from "/images/leader_board.gif";

const TopInstruct = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#f93f23" }}
            align="center"
            gutterBottom
          >
            Keep tabs on all your food
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "333333", fontStyle: "italic" }}
            align="center"
            gutterBottom
          >
            when they expire & when you've used them
          </Typography>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Gif}
          style={{ width: "85%", textAlign: "center", borderRadius: "2%" }}
        />
      </Grid>
    </>
  );
};

const BottomInstruct = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#f93f23" }}
            align="center"
            gutterBottom
          >
            Get inspired by curated recipes
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "333333", fontStyle: "italic" }}
            align="center"
            gutterBottom
          >
            select items in your fridge & we'll tell you what to make
          </Typography>
        </Container>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Gif}
          style={{ width: "85%", textAlign: "center", borderRadius: "2%" }}
        />
      </Grid>
    </>
  );
};

const Instructions = () => {
  return (
    <div
      style={{
        padding: "10vh 5vh",
      }}
    >
      <Grid container sx={{ padding: "5%" }} spacing={10} direction="row">
        <TopInstruct />
      </Grid>
      <Grid
        container
        sx={{ padding: "5%" }}
        spacing={10}
        direction="row-reverse"
      >
        <BottomInstruct />
      </Grid>
      <br />
    </div>
  );
};

export default Instructions;
