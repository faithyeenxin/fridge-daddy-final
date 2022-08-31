import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import RecipeForm from "../../forms/RecipeForm";
import RecipeCard from "./RecipeCard";
import RandomRecipeCard from "./RandomRecipeCard";

const RecipeLeftContentSection = ({ recipeList }) => {
  const [mealInput, setMealInput] = useState("");
  const [cuisineInput, setCuisineInput] = useState("");
  const [recipeQuery, setRecipeQuery] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [status, setStatus] = useState("showRandom");
  let recipes;
  const recipeStr = recipeList.join(", ");

  //////////////////////////////////////////////////////
  //// * Random Recipe
  //////////////////////////////////////////////////////

  const numberOfRecipes = 16;
  const apiKey = `5962ec749418426c81fa226be6317343`;
  const apiKey2 = `a15745668f894779b75adf57f9d76136`;
  const randomRecipeUrl = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey2}`;

  useEffect(() => {
    fetch(randomRecipeUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRandomRecipe(data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //////////////////////////////////////////////////////
  //// * Searched Recipe
  //////////////////////////////////////////////////////

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

    const queryUrl = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfRecipes}&sort=min-missing-ingredients&sortDirection=asc&instructionsRequired=true&ignorePantry=true&includeIngredients=${ingredients}&cuisine=${cuisine}&type=${meal}&apiKey=${apiKey2}`;
    /// fetching of data
    setStatus("pending");
    fetch(queryUrl)
      .then((res) => res.json())
      .then((data) => {
        setRecipeQuery(data.results);
        console.log(data.results);
        if (data.results.length > 0) {
          setStatus("resolved");
        } else {
          setStatus("no recipe found");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  };

  if (recipeQuery.length < 6) {
    recipes = recipeQuery;
  } else {
    recipes = recipeQuery.slice(0, 6);
  }

  let recipeDisplay;
  if (status === "showRandom") {
    recipeDisplay = (
      <CardContent>
        <Grid container spacing={2}>
          {randomRecipe.map((item) => (
            <RandomRecipeCard key={Math.random()} item={item} />
          ))}
        </Grid>
      </CardContent>
    );
  } else if (status === "pending") {
    recipeDisplay = (
      <>
        <Typography variant="h6" textAlign="center" sx={{ margin: "10%" }}>
          Searching...
        </Typography>
        <LinearProgress color="inherit" />
        <br />
      </>
    );
  } else if (status === "resolved") {
    recipeDisplay = (
      <CardContent>
        <Grid container spacing={2}>
          {recipes.map((item) => (
            <RecipeCard key={Math.random()} item={item} />
          ))}
        </Grid>
      </CardContent>
    );
  } else if (status === "no recipe found") {
    recipeDisplay = (
      <Typography variant="h6" textAlign="center" sx={{ margin: "10%" }}>
        No Recipes Found
      </Typography>
    );
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
        {recipeDisplay}
      </Card>
    </Grid>
  );
};

export default RecipeLeftContentSection;
