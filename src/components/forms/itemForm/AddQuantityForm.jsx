import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const AddQuantityForm = () => {
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
      />
    </Grid>
  );
};

export default AddQuantityForm;
