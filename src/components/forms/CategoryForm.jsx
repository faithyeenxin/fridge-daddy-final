import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import Image from "/images/green_apple_opacity.png";
import ShelfContext from "../../contextStore/shelfLife-context";
import DataContext from "../../contextStore/data-context";
import format from "date-fns/format";

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

let today = new Date();
// today = format(today, "yyyy-MM-dd");

const CategoryForm = () => {
  const shelfCtx = useContext(ShelfContext);
  const dataCtx = useContext(DataContext);

  const [categoryInput, setCategoryInput] = useState("");
  const [shelfLifeInput, setShelfLifeInput] = useState("");

  const handleSubmit = () => {
    console.log(categoryInput, shelfLifeInput);
    shelfCtx.addShelfData({
      id: Math.random(), //to change this to it's respective id found when calling API
      name: categoryInput,
      shelflife: shelfLifeInput,
      dateAdded: format(today, "yyyy-MM-dd"),
      contributor: dataCtx.username,
      imgUrl: "image will be found using API call to spoonacular",
    });
  };

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
              onChange={(e) => setCategoryInput(e.target.value)}
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
              type="number"
              onChange={(e) => setShelfLifeInput(e.target.value)}
              helperText="please only input integers!"
            />
          </Grid>
        </Grid>
        <Button variant="primary" sx={buttonSx} onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </Paper>
  );
};

export default CategoryForm;

// let dd = today.getDate();
// let mm = today.getMonth() + 1; // this is because January is 0!
// let yyyy = today.getFullYear();

// let helperText;
// // let [minDate, setMinDate] = useState("");

// if (dd < 10) {
//   dd = "0" + dd;
// }

// if (mm < 10) {
//   mm = "0" + mm;
// }

// today = yyyy + "-" + mm + "-" + dd;
