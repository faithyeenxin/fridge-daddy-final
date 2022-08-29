import React, { useMemo, useState, useContext, useEffect } from "react";
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
import ShelfContext from "../../../contextStore/shelfLife-context";

//this should get data from API

const AddCategoryForm = ({ handleCategoryChange }) => {
  const shelfCtx = useContext(ShelfContext);
  const navigate = useNavigate();
  const shelfLifeOptions = [{ name: "+ add category" }, ...shelfCtx.shelfData];
  const [searchText, setSearchText] = useState("");

  const options =
    searchText === ""
      ? shelfLifeOptions
      : shelfLifeOptions.filter((option) => {
          return option.name.includes(searchText);
        });

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
          variant="filled"
          label="category"
          select
          size="small"
          sx={{ margin: "10px" }}
          margin="normal"
          helperText="We'll suggest an expiration date!"
          onChange={(e) => {
            setSearchText("");
            handleCategoryChange(e);
            shelfCtx.displayShelfData(e);
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
          {options.map((option, i) =>
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
