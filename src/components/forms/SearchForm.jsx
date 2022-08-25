import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Image from "/images/strawberry_opacity.png";

const buttonSx = {
  backgroundColor: "white",
  color: "red",
  margin: "3% auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};

const SearchForm = () => {
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
          align="center"
          sx={{ color: "white", margin: "5%" }}
          gutterBottom
        >
          Looking for something?
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            fullWidth
            variant="filled"
            label="please enter a single word"
            size="small"
          />
        </Container>
        <Button variant="primary" sx={buttonSx}>
          Search
        </Button>
      </Container>
    </Paper>
  );
};

export default SearchForm;
