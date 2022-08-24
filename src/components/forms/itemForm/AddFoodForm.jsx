import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const AddFoodForm = () => {
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
        variant="filled"
        label="food/ingredient"
        size="small"
        helperText=" "
      />
    </Grid>
  );
};

export default AddFoodForm;
