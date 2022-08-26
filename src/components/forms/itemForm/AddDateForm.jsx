import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const AddDateForm = ({ name }) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // this is because January is 0!
  let yyyy = today.getFullYear();
  let [minDate, setMinDate] = useState("");
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  return (
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
      <TextField
        fullWidth
        id="date"
        size="small"
        label={name}
        type="date"
        // defaultValue={today}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ min: "2022-06-22" }}
        sx={{ margin: "10px" }}
      />
    </Grid>
  );
};

export default AddDateForm;
