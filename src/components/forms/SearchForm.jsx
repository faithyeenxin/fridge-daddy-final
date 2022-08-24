import { Container, Typography } from "@mui/material";
import React from "react";

const SearchForm = () => {
  return (
    <Container sx={{ backgroundColor: "red" }}>
      <form>
        <Typography>Add an Item!</Typography>
        <input name="name" placeholder="name" />
        <input name="category" placeholder="category" />
        <input name="quantity" placeholder="quantity" />
        <input name="purchaseDate" placeholder="purchaseDate" />
        <input name="eatByDate" placeholder="eatByDate" />
      </form>
    </Container>
  );
};

export default SearchForm;
