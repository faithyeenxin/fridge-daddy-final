import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import KeepFoodTabsGif from "/images/keepfoodtabs.gif";
import RecipesGif from "/images/recipes.gif";
import AddCategoryGif from "/images/addcategory.gif";
const KeepTabs = () => {
  return (
    <Grid
      container
      sx={{ padding: "5%" }}
      rowSpacing={5}
      columnSpacing={10}
      direction="row"
    >
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
          src={KeepFoodTabsGif}
          style={{ width: "100%", textAlign: "center", borderRadius: "2%" }}
        />
      </Grid>
    </Grid>
  );
};

const CurateRecipe = () => {
  return (
    <Grid container sx={{ padding: "5%" }} spacing={10} direction="row-reverse">
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
          src={RecipesGif}
          style={{ width: "100%", textAlign: "center", borderRadius: "2%" }}
        />
      </Grid>
    </Grid>
  );
};

const AddCategory = () => {
  return (
    <Grid container sx={{ padding: "5%" }} spacing={10} direction="row">
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
            Contribute to our community
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "333333", fontStyle: "italic" }}
            align="center"
            gutterBottom
          >
            If shelf life category does not exist, add it!
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
          src={AddCategoryGif}
          style={{ width: "100%", textAlign: "center", borderRadius: "2%" }}
        />
      </Grid>
    </Grid>
  );
};

const Instructions = () => {
  return (
    <div
      style={{
        padding: "5vh 5vh",
      }}
    >
      <KeepTabs />
      <CurateRecipe />
      <AddCategory />
    </div>
  );
};

export default Instructions;
