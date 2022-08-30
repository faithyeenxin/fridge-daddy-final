import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import RecipeForm from "../../forms/RecipeForm";
import RecipeList from "../../list/RecipeList";
import RecipeLeftContentSection from "./RecipeLeftContentSection";
import RecipeRightContentSection from "./RecipeRightContentSection";

const RecipeContentSection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "3%",
        marginBottom: "2%",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <RecipeLeftContentSection />
        <RecipeRightContentSection />
      </Grid>
    </Container>
  );
};

export default RecipeContentSection;
