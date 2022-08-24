import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const AddDateForm = ({ name }) => {
  const date = new window.Date();
  const [value, setValue] = useState(date);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label={name}
        inputFormat="DD MMM yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField size="small" sx={{ margin: "10px" }} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default AddDateForm;

// <TextField
// required
// vvariant="filled"
// label="purchase date"
// size="small"
// margin="normal"
// sx={{ margin: "10px" }}
// />
