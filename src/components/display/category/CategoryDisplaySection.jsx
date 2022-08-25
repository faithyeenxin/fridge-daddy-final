import { Card, CardHeader, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ScrollableList from "../../list/ScrollableList";
import CategoryCard from "./CategoryCard";

const CategoryDisplaySection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Grid container justifyContent="center">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Grid>
    </Container>
  );
};

export default CategoryDisplaySection;
