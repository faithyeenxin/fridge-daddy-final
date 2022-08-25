import { Grid } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardDeck = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Grid>
    </>
  );
};

export default CategoryCardDeck;
