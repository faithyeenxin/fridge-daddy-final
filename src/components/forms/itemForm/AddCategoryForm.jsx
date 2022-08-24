import React from "react";
import { FormControl, MenuItem, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";

const AddCategoryForm = () => {
  const navigate = useNavigate();
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
      <FormControl>
        <TextField
          required
          variant="filled"
          label="category"
          select
          size="small"
          sx={{ margin: "10px" }}
          margin="normal"
          helperText="We'll suggest an expiration date!"
        >
          <MenuItem value={"Fruits"}>Fruits</MenuItem>
          <MenuItem value={"Meats"}>Meats</MenuItem>
          <MenuItem value={"Fish"}>Fish</MenuItem>
          <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
          <MenuItem onClick={() => navigate("/category")}>
            <AddCircleOutlineIcon
              sx={{ fontSize: "medium", color: "#f93f23" }}
            />
            Add Category
          </MenuItem>
        </TextField>
      </FormControl>
    </Grid>
  );
};

export default AddCategoryForm;
