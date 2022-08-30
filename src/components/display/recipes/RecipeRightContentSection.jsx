import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import RecipeList from "../../list/RecipeList";

const RecipeRightContentSection = () => {
  return (
    <Grid
      item
      s={12}
      md={4}
      sx={{
        margin: "2%",
      }}
    >
      <Card sx={{ width: "100%", height: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            padding: "5%",
            color: "#c9caa2",
          }}
        >
          select from your fridge!
        </Typography>
        <RecipeList name="evergreen" />
      </Card>
    </Grid>
  );
};

export default RecipeRightContentSection;
