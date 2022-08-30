import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import RecipeForm from "../../forms/RecipeForm";
import RecipeCard from "./RecipeCard";
import RandomRecipeCard from "./RandomRecipeCard";

const RecipeLeftContentSection = ({ recipeList }) => {
  const [mealInput, setMealInput] = useState("");
  const [cuisineInput, setCuisineInput] = useState("");
  const [recipeQuery, setRecipeQuery] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  let recipes;
  const recipeStr = recipeList.join(", ");

  const numberOfRecipes = 16;
  const apiKey = `5962ec749418426c81fa226be6317343`;

  const randomRecipeUrl = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(randomRecipeUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRandomRecipe(data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCuisine = (cuisine) => {
    setCuisineInput(cuisine);
  };

  const getMeal = (meal) => {
    setMealInput(meal);
  };

  const handleRecipeFormSubmit = () => {
    const ingredients = recipeList.join(",");
    const cuisine = cuisineInput;
    const meal = mealInput;

    const queryUrl = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfRecipes}&sort=min-missing-ingredients&sortDirection=asc&instructionsRequired=true&ignorePantry=true&includeIngredients=${ingredients}&cuisine=${cuisine}&type=${meal}&apiKey=${apiKey}`;
    /// fetching of data
    console.log(queryUrl);
    fetch(queryUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setRecipeQuery(data.results);
      })
      .catch((err) => console.log(err));
  };

  if (recipeQuery.length < 6) {
    recipes = recipeQuery;
  } else {
    recipes = recipeQuery.slice(0, 6);
  }

  return (
    <Grid item s={12} md={7}>
      <Card sx={{ margin: "0% 0% 5% 0%" }}>
        <CardHeader
          variant="h2"
          title={
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                letterSpacing: 5,
                textAlign: "center",
                fontStyle: "italic",
                color: "#3b5f4b",
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
            {recipeStr}
          </Typography>
          <RecipeForm
            getMeal={getMeal}
            getCuisine={getCuisine}
            handleRecipeFormSubmit={handleRecipeFormSubmit}
          />
        </CardContent>
      </Card>
      <Card sx={{ margin: "0% 0% 5% 0%" }}>
        <CardHeader
          variant="h1"
          title={
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
                textAlign: "center",
                fontStyle: "italic",
                color: "#3b5f4b",
              }}
            >
              recipes that might spark your interest
            </Typography>
          }
        />

        <CardContent>
          <Grid container spacing={2}>
            {recipeQuery.length === 0
              ? randomRecipe.map((item) => (
                  <RandomRecipeCard key={Math.random()} item={item} />
                ))
              : recipes.map((item) => (
                  <RecipeCard key={Math.random()} item={item} />
                ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecipeLeftContentSection;
