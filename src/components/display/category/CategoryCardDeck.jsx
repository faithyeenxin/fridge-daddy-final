import { Grid } from "@mui/material";
import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import ShelfContext from "../../../contextStore/shelfLife-context";
const CategoryCardDeck = () => {
  const shelfCtx = useContext(ShelfContext);
  const shelfData = shelfCtx.shelfData.slice(0, 4);

  const fourCategoryCards = shelfData.map((item) => {
    console.log(item.imgUrl);
    return (
      <CategoryCard
        name={item.name}
        shelflife={item.shelflife}
        imgUrl={item.imgUrl}
      />
    );
  });
  return (
    <>
      <Grid container justifyContent="center">
        {fourCategoryCards}
      </Grid>
    </>
  );
};

export default CategoryCardDeck;
