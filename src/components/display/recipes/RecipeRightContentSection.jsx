import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import RecipeList from "../../list/RecipeList";

const RecipeRightContentSection = ({ addToList, removeFromList }) => {
  return (
    <Grid item s={12} md={4}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            padding: "5%",
            color: "#3b5f4b",
          }}
        >
          select from your fridge!
        </Typography>
        <RecipeList addToList={addToList} removeFromList={removeFromList} />
      </Card>
    </Grid>
  );
};

export default RecipeRightContentSection;
