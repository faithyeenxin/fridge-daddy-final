import React, { useMemo, useState } from "react";
import {
  FormControl,
  InputAdornment,
  ListSubheader,
  MenuItem,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const allOptions = ["Fruit", "Meat", "Vegetable", "Fish", "+ Add Category"];

const AddCategoryForm = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [searchText, setSearchText] = useState("");

  // The React useMemo Hook returns a memoized value
  const displayedOptions = useMemo(
    () => allOptions.filter((option) => containsText(option, searchText)),
    [searchText]
  );
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
      <FormControl fullWidth>
        <TextField
          required
          variant="filled"
          label="category"
          select
          size="small"
          sx={{ margin: "10px" }}
          margin="normal"
          helperText="We'll suggest an expiration date!"
          onChange={(e) => setSelectedOption(e.target.value)}
          onClose={() => setSearchText("")}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => selectedOption}
        >
          <ListSubheader>
            <TextField
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder="Type to search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) =>
            option !== "+ Add Category" ? (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ) : (
              <MenuItem key={i} onClick={() => navigate("/category")}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>
      </FormControl>
    </Grid>
  );
};

export default AddCategoryForm;
