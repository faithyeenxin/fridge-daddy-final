import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Grid } from "@mui/material";
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField size="small" sx={{ margin: "10px" }} {...params} />
          </Grid>
        )}
      />
    </LocalizationProvider>
  );
};

export default AddDateForm;
