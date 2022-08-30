import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import RecipeForm from "../../forms/RecipeForm";

const RecipeLeftContentSection = () => {
  return (
    <Grid
      item
      s={12}
      md={7}
      sx={{
        margin: "2%",
      }}
    >
      <Card sx={{ padding: "0% 1%" }}>
        <CardHeader
          variant="h1"
          title={
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
                textAlign: "center",
                fontStyle: "italic",
                color: "#c9caa2",
              }}
            >
              items selected
            </Typography>
          }
        />

        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 6,
              textAlign: "center",
              fontStyle: "italic",
              padding: "0px 0px 25px 0px",
            }}
          >
            banana, pasta, basil
          </Typography>
          <RecipeForm />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecipeLeftContentSection;
