import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import { Markup } from "interweave";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "/images/recipe_background.png";

const RecipeContent = ({ recipe }) => {
  const ingredients = recipe?.extendedIngredients?.map((ingredient) => (
    <li key={Math.random()}>{ingredient.original}</li>
  ));

  return (
    <Paper
      sx={{
        padding: "5vh 0vh 5vh 0vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // borderRadius: "2%",
        margin: -1,
      }}
    >
      <Container sx={{ marginTop: "2%" }}>
        <Card>
          <Grid container spacing={3}>
            <Grid item s={12} md={6}>
              <CardMedia
                component="img"
                image={recipe.image}
                sx={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid item s={12} md={6} alignItems="center">
              <CardContent>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    paddingTop: 10,
                    paddingBottom: 2,
                    fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "center",
                    // fontStyle: "italic",
                    color: "#f93f23",
                  }}
                >
                  {recipe.title}
                </Typography>

                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    paddingTop: 2,

                    fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#343928",
                  }}
                >
                  serves {recipe.servings}
                </Typography>

                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#343928",
                  }}
                >
                  prep time: {recipe.readyInMinutes} minutes
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Container sx={{ marginTop: "2%" }}>
        <Card>
          <Typography
            variant="body2"
            align="center"
            sx={{
              padding: 3,
              letterSpacing: 2,
              textAlign: "center",
              fontStyle: "italic",
              color: "#343928",
            }}
          >
            <Markup content={recipe.summary} />
          </Typography>
        </Card>
      </Container>
      <Container sx={{ marginTop: "2%" }}>
        <Card>
          <Grid container spacing={3}>
            <Grid item s={12} md={6} alignItems="center">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    paddingTop: 5,
                    paddingBottom: 2,
                    // fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "center",
                    // fontStyle: "italic",
                    color: "#f93f23",
                  }}
                >
                  Ingredients
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    // fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "left",
                    fontStyle: "italic",
                    color: "#343928",
                  }}
                >
                  <ul>{ingredients}</ul>
                </Typography>
              </CardContent>
            </Grid>
            <Grid item s={12} md={6} alignItems="center">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    paddingTop: 5,
                    paddingBottom: 2,
                    // fontWeight: "bold",
                    letterSpacing: 2,
                    textAlign: "center",
                    // fontStyle: "italic",
                    color: "#f93f23",
                  }}
                >
                  Instructions
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    padding: 3,
                    letterSpacing: 2,
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#343928",
                  }}
                >
                  <Markup content={recipe.instructions} />
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Paper>
  );
};

export default RecipeContent;
