import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import AddCategoryForm from "./itemForm/AddCategoryForm";
import AddDateForm from "./itemForm/AddDateForm";
import AddFoodForm from "./itemForm/AddFoodForm";
import AddQuantityForm from "./itemForm/AddQuantityForm";
import Image from "/images/full_peach_opacity.jpg";
import DataContext from "../../contextStore/data-context";

import differenceInDays from "date-fns/differenceInDays";

// differenceInDays(dateLeft, dateRight);

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
  const [foodItem, setFood] = useState("");
  const [quantityItem, setQuantity] = useState("");
  const [categoryItem, setCategory] = useState("");
  const [purchaseDateItem, setPurchaseDate] = useState("");
  const [expiryDateItem, setExpiryDate] = useState("");

  const dataCtx = useContext(DataContext);

  const addToList = () => {
    console.log(purchaseDateItem, expiryDateItem); // date format returns : 2022-08-20 2022-08-31
    const diffInDays = differenceInDays(purchaseDateItem, expiryDateItem);
    console.log(diffInDays);
    dataCtx.addEvergreen({
      id: `${foodItem}-${categoryItem}-${purchaseDateItem}-${expiryDateItem}-${Math.random()}`,
      item: foodItem,
      quantity: quantityItem,
      category: categoryItem,
      purchaseDate: purchaseDateItem,
      expiryDate: expiryDateItem,
    });
  };

  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePurchaseDateChange = (e) => {
    console.log(e.target.value);
    setPurchaseDate(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    console.log(e.target.value);
    setExpiryDate(e.target.value);
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
          sx={{ color: "#33333", margin: "5%" }}
          gutterBottom
        >
          Add an Item!
        </Typography>
        <Grid container sx={{ padding: "0% 10%" }}>
          <AddFoodForm handleFoodChange={handleFoodChange} />
          <AddQuantityForm handleQuantityChange={handleQuantityChange} />
          <AddCategoryForm handleCategoryChange={handleCategoryChange} />
        </Grid>
        <Grid container sx={{ padding: "0% 20%" }}>
          <AddDateForm
            name="Purchase Date"
            handleDateChange={handlePurchaseDateChange}
          />
          <AddDateForm
            name="Expiration Date"
            handleDateChange={handleExpiryDateChange}
          />
        </Grid>
        <Button variant="primary" sx={buttonSx} onClick={addToList}>
          Submit
        </Button>
      </Container>
    </Paper>
  );
};

export default ItemForm;
