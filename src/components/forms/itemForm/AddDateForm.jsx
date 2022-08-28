import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

const AddDateForm = ({ name, handleDateChange, categoryItem }) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // this is because January is 0!
  let yyyy = today.getFullYear();

  let helperText;
  // let [minDate, setMinDate] = useState("");

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  if (name === "Purchase Date") {
    helperText = " ";
  } else if (name === "Expiration Date") {
    helperText = categoryItem;
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
        defaultValue={today}
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
