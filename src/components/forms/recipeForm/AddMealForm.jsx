import {
  TextField,
  FormControl,
  InputAdornment,
  ListSubheader,
  MenuItem,
} from "@mui/material";

import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShelfContext from "../../../contextStore/shelfLife-context";
import DataContext from "../../../contextStore/data-context";

const AddMealForm = ({ getMeal }) => {
  const mealType = [
    "-",
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ];

  const [searchText, setSearchText] = useState("");

  const options =
    searchText === ""
      ? mealType
      : mealType.filter((option) => {
          return option.includes(searchText);
        });
  return (
    <FormControl fullWidth>
      {/* this does the input */}
      <TextField
        autoComplete="off"
        variant="filled"
        label="meal type"
        select
        size="small"
        sx={{ margin: "10px" }}
        margin="normal"
        onChange={(e) => {
          setSearchText("");
          getMeal(e.target.value);
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

export default AddMealForm;
