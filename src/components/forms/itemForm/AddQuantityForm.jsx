import React from "react";
import { Grid, TextField } from "@mui/material";
const AddQuantityForm = ({ handleQuantityChange }) => {
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
        variant="filled"
        label="quantity"
        size="small"
        helperText=" "
        // onChange={handleQuantityChange}
        onChange={(e) => handleQuantityChange(e)}
      />
    </Grid>
  );
};

export default AddQuantityForm;
