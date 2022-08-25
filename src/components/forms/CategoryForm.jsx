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
import Image from "/images/green_apple_opacity.png";

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

const CategoryForm = () => {
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
          sx={{ color: "white", margin: "5%" }}
          gutterBottom
        >
          Add a Category
        </Typography>
        <Grid container sx={{ padding: "0% 20%" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              variant="filled"
              label="category name"
              size="small"
              helperText=" "
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              variant="filled"
              label="shelf life in days"
              size="small"
              helperText="please only input integers!"
            />
          </Grid>
        </Grid>
        <Button variant="primary" sx={buttonSx}>
          Submit
        </Button>
      </Container>
    </Paper>
  );
};

export default CategoryForm;
