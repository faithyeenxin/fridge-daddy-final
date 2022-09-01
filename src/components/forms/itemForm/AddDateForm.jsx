import React, { useState, useContext, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import ShelfContext from "../../../contextStore/shelfLife-context";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
const AddDateForm = ({
  name,
  purchaseDate,
  handleDateChange,
  categoryItem,
}) => {
  const shelfCtx = useContext(ShelfContext);

  let today = new Date();
  const todayStr = format(today, "yyyy-MM-dd");

  let helperText;
  if (name === "Expiration Date" && categoryItem !== "") {
    helperText = `Shelf life is ${shelfCtx.shelfLifeInFocus} day(s), ${format(
      addDays(new Date(), shelfCtx.shelfLifeInFocus),
      "d/MM/yyyy"
    )} `;
  } else {
    helperText = " ";
  }
  console.log(shelfCtx.shelfLifeInFocus);

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
        InputLabelProps={{
          shrink: true,
        }}
        // InputProps={{ min: minDate }} //"2022-06-22"
        sx={{ margin: "10px" }}
        onChange={handleDateChange}
      />
    </Grid>
  );
};

export default AddDateForm;
