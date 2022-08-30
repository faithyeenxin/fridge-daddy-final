import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import RecipeLeftContentSection from "./RecipeLeftContentSection";
import RecipeRightContentSection from "./RecipeRightContentSection";

const RecipeContentSection = () => {
  const [recipeList, setRecipeList] = useState([]);

  const addToList = (listItem) => {
    setRecipeList([...recipeList, listItem.name]);
  };
  const removeFromList = (listItem) => {
    const newRecipeList = recipeList.filter((item) => item !== listItem.name);
    setRecipeList(newRecipeList);
  };

  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "3%",
        marginBottom: "2%",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <RecipeLeftContentSection recipeList={recipeList} />
        <RecipeRightContentSection
          addToList={addToList}
          removeFromList={removeFromList}
        />
      </Grid>
    </Container>
  );
};

export default RecipeContentSection;
