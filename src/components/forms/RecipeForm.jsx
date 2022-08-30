import { Button, Container, Grid } from "@mui/material";

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShelfContext from "../../contextStore/shelfLife-context";
import DataContext from "../../contextStore/data-context";
import AddCuisineForm from "./recipeForm/AddCuisineForm";
import AddMealForm from "./recipeForm/AddMealForm";

const buttonSx = {
  backgroundColor: "#d1d1b5",
  color: "white",
  margin: "3% auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};

let today = new Date();
// today = format(today, "yyyy-MM-dd");

// https://api.spoonacular.com/food/ingredients/search?query=fruit&apiKey=5962ec749418426c81fa226be6317343
const apiKey = "5962ec749418426c81fa226be6317343";

const RecipeForm = () => {
  return (
    <Container>
      <Grid container sx={{ padding: "0% 10%" }}>
        <Grid
          item
          xs={12}
          s={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddCuisineForm />
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddMealForm />
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Button
            variant="primary"
            sx={buttonSx}
            onClick={() => {
              console.log("submit button was clicked");
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeForm;
