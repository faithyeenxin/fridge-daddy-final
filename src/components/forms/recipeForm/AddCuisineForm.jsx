import {
  TextField,
  FormControl,
  InputAdornment,
  ListSubheader,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const AddCuisineForm = ({ getCuisine }) => {
  const cuisines = [
    "-",
    "african",
    "american",
    "british",
    "cajun",
    "caribbean",
    "chinese",
    "eastern european",
    "european",
    "french",
    "german",
    "greek",
    "indian",
    "irish",
    "italian",
    "japanese",
    "jewish",
    "korean",
    "latin american",
    "mediterranean",
    "mexican",
    "middle eastern",
    "nordic",
    "southern",
    "spanish",
    "thai",
    "vietnamese",
  ];

  const [searchText, setSearchText] = useState("");

  const options =
    searchText === ""
      ? cuisines
      : cuisines.filter((option) => {
          return option.includes(searchText);
        });
  return (
    <FormControl fullWidth>
      {/* this does the input */}
      <TextField
        autoComplete="off"
        variant="filled"
        label="cuisine type"
        select
        size="small"
        sx={{ margin: "10px" }}
        margin="normal"
        onChange={(e) => {
          setSearchText("");
          getCuisine(e.target.value);
        }}
        onClose={() => {
          setSearchText("");
        }}
      >
        <ListSubheader>
          {/* this does the search */}
          <TextField
            size="small"
            // Autofocus on textfield
            autoFocus
            placeholder="Type to search..."
            autoComplete="off"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
              // setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Escape") {
                // Prevents autoselecting item while typing (default Select behaviour)
                e.stopPropagation();
              }
            }}
          />
        </ListSubheader>
        {options.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default AddCuisineForm;
