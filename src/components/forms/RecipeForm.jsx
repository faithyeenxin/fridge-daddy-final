import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
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

const RecipeForm = ({ getMeal, getCuisine, handleRecipeFormSubmit }) => {
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
          <AddCuisineForm getCuisine={getCuisine} />
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
          <AddMealForm getMeal={getMeal} />
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
            onClick={handleRecipeFormSubmit}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeForm;
