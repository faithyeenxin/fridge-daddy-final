import React, { useState, useContext, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import ShelfContext from "../../../contextStore/shelfLife-context";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
const AddDateForm = ({
  name,
  handleDateChange,
  categoryItem,
  displayPurchaseDate,
  setDisplayPurchaseDate,
  displayExpiryDate,
  setDisplayExpiryDate,
}) => {
  let today = new Date();
  const todayStr = format(today, "yyyy-MM-dd");
  const shelfCtx = useContext(ShelfContext);
  useEffect(() => {
    if (name === "Expiration Date" && categoryItem !== "") {
      const newExpiryDate = format(
        addDays(parseISO(displayPurchaseDate), shelfCtx.shelfLifeInFocus),
        "yyyy-MM-dd"
      );
      setDisplayExpiryDate(newExpiryDate);
    } else if (name === "Purchase Date" && categoryItem !== "") {
      // console.log(displayPurchaseDate);
      const newExpiryDate = format(
        addDays(parseISO(displayPurchaseDate), shelfCtx.shelfLifeInFocus),
        "yyyy-MM-dd"
      );
      setDisplayExpiryDate(newExpiryDate);
    }
  }, [categoryItem, displayPurchaseDate]);

  let helperText;
  if (name === "Expiration Date" && categoryItem !== "") {
    helperText = `Shelf life is ${shelfCtx.shelfLifeInFocus} day(s)`;
  } else {
    helperText = " ";
  }

  return (
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
        fullWidth
        id="date"
        size="small"
        label={name}
        helperText={helperText}
        type="date"
        defaultValue={todayStr}
        value={name === "Expiration Date" ? displayExpiryDate : undefined}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ margin: "10px" }}
        onChange={(e) => {
          handleDateChange(e);
          name === "Purchase Date" && setDisplayPurchaseDate(e.target.value);
        }}
      />
    </Grid>
  );
};

export default AddDateForm;
