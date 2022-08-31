import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Paper,
  LinearProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import { Markup } from "interweave";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeContent from "../components/display/recipe/RecipeContent";
import Image from "/images/recipe_background.png";

const Recipe = () => {
  const { id } = useParams();
  const apiKey = `5962ec749418426c81fa226be6317343`;
  const apiKey2 = `a15745668f894779b75adf57f9d76136`;
  console.log(id);
  const recipeUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey2}`;
  const [recipe, setRecipe] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    fetch(recipeUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipe(data);
        setStatus("resolved");
      });
  }, [recipeUrl]);

  let recipeDisplay;
  if (status === "pending") {
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
    recipeDisplay = <RecipeContent recipe={recipe} />;
  }

  return <>{recipeDisplay};</>;
};

export default Recipe;
