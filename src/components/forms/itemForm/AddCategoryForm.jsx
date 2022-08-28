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
import SearchIcon from "@mui/icons-material/Search";

import mockShelfLifeData from "../../testingFolder/mockShelfLifeData";

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

//this should get data from API
const shelfLifeOptions = [
  {
    name: "+ add category",
  },
  ...mockShelfLifeData,
];
const AddCategoryForm = ({ handleCategoryChange }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [searchText, setSearchText] = useState("");
  const [shelfLife, setShelfLife] = useState("");
  // The React useMemo Hook returns a memorized value
  const displayedOptions = useMemo(
    () =>
      shelfLifeOptions.filter((option) =>
        containsText(option.name, searchText)
      ),
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
        {/* this does the input */}
        <TextField
          required
          name="this could be a way to pass the value of category but idk how"
          variant="filled"
          label="category"
          select
          size="small"
          sx={{ margin: "10px" }}
          margin="normal"
          helperText="We'll suggest an expiration date!"
          onChange={(e) => {
            setSelectedOption(e.target.value);
            //handleCategoryChange only passes back the value but i want it to pass back more info... how?
            handleCategoryChange(e);
          }}
          onClose={() => {
            setSearchText("");
          }}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => selectedOption}
        >
          <ListSubheader>
            {/* this does the seach */}
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
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) =>
            option.name !== "+ add category" ? (
              <MenuItem key={i} value={option.name}>
                {option.name}
              </MenuItem>
            ) : (
              <MenuItem key={i} onClick={() => navigate("/category")}>
                {option.name}
              </MenuItem>
            )
          )}
        </TextField>
      </FormControl>
    </Grid>
  );
};

export default AddCategoryForm;
