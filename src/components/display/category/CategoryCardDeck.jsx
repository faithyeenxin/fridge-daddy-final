import { Grid } from "@mui/material";
import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import ShelfContext from "../../../contextStore/shelfLife-context";
const CategoryCardDeck = () => {
  const shelfCtx = useContext(ShelfContext);
  const shelfDataLength = shelfCtx.shelfData.length;
  const shelfData = shelfCtx.shelfData
    .slice(shelfDataLength - 4, shelfDataLength)
    .reverse();

  const fourCategoryCards = shelfData.map((item, index) => {
    return (
      <CategoryCard
        key={index}
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
