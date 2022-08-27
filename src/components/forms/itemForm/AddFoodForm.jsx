import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
const AddFoodForm = ({ handleFoodChange }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        required
        autoComplete="off"
        variant="filled"
        label="food/ingredient"
        size="small"
        helperText=" "
        onChange={(e) => handleFoodChange(e)}
      />
    </Grid>
  );
};

export default AddFoodForm;
