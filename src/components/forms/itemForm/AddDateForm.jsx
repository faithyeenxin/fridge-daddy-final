import React, { useState, useContext, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import ShelfContext from "../../../contextStore/shelfLife-context";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
const AddDateForm = ({
  name,
  purchaseDate,
  handleDateChange,
  categoryItem,
}) => {
  const shelfCtx = useContext(ShelfContext);

  let today = new Date();
  const todayStr = format(today, "yyyy-MM-dd");
  // let todayStr2 = format(today, "yyyy-MM-dd");
  const [todayStr2, setTodayStr2] = useState(format(today, "yyyy-MM-dd"));

  useEffect(() => {
    if (shelfCtx.shelfLifeInFocus !== undefined) {
      setTodayStr2(
        format(addDays(new Date(), shelfCtx.shelfLifeInFocus), "yyyy-MM-dd")
      );
      console.log("new date created");
    }
  }, [shelfCtx.shelfLifeInFocus]);

  let helperText;
  if (name === "Expiration Date" && categoryItem !== "") {
    helperText = `Shelf life is ${shelfCtx.shelfLifeInFocus} day(s) from today!`;
  } else {
    helperText = " ";
  }
  console.log(shelfCtx.shelfLifeInFocus);

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
        helperText={helperText}
        type="date"
        value={name === "Purchase Date" ? todayStr : todayStr2}
        InputLabelProps={{
          shrink: true,
        }}
        // InputProps={{ min: minDate }} //"2022-06-22"
        sx={{ margin: "10px" }}
        onChange={handleDateChange}
      />
    </Grid>
  );
};

export default AddDateForm;

// let dd = today.getDate();
// let mm = today.getMonth() + 1; // this is because January is 0!
// let yyyy = today.getFullYear();

// let helperText;
// // let [minDate, setMinDate] = useState("");

// if (dd < 10) {
//   dd = "0" + dd;
// }

// if (mm < 10) {
//   mm = "0" + mm;
// }

// today = yyyy + "-" + mm + "-" + dd;
