import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddCategoryForm from "./itemForm/AddCategoryForm";
import AddDateForm from "./itemForm/AddDateForm";
import AddFoodForm from "./itemForm/AddFoodForm";
import AddQuantityForm from "./itemForm/AddQuantityForm";
import Image from "/images/full_peach_opacity.jpg";

const buttonSx = {
  backgroundColor: "#f93f23",
  color: "white",
  margin: "3% auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};

const ItemForm = () => {
  return (
    <Paper
      sx={{
        padding: "8vh 0vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // borderRadius: "2%",
        margin: -1,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#33333", margin: "5%" }}
          gutterBottom
        >
          Add an Item!
        </Typography>
        <Grid container>
          <AddFoodForm />
          <AddQuantityForm />
          <AddCategoryForm />
        </Grid>
        <Grid container>
          <AddDateForm name="Purchase Date" />
          <AddDateForm name="Expiration Date" />
        </Grid>
        <Button variant="primary" sx={buttonSx}>
          Submit
        </Button>
      </Container>
    </Paper>
  );
};

export default ItemForm;
