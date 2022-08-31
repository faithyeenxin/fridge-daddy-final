import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryCardDeck from "./CategoryCardDeck";
import CategoryTable from "./CategoryTable";

const CategoryDisplaySection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Typography
        align="center"
        variant="subtitle1"
        sx={{ color: "#455a40", fontStyle: "italic" }}
      >
        Last 4 items added
      </Typography>

      <CategoryCardDeck />
      <Container sx={{ marginTop: "30px" }}>
        <Typography
          align="center"
          variant="subtitle1"
          sx={{ color: "#455a40", fontStyle: "italic" }}
        >
          The table is interactive - click on the table header to filter and
          search!
        </Typography>
        <CategoryTable />
      </Container>
    </Container>
  );
};

export default CategoryDisplaySection;
