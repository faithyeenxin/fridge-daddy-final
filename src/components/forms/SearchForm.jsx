import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "/images/full_peach.jpg";

const buttonSx = {
  backgroundColor: "#f93f23",
  color: "white",
  margin: "3% auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
  borderRadius: 2,
  padding: "0.5rem 1.5rem",
};
const SearchForm = () => {
  return (
    <Paper
      sx={{
        padding: "8vh 0vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        borderRadius: "2%",
      }}
    >
      <form>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#33333" }}
          gutterBottom
        >
          Add an Item!
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 3,
            }}
          >
            <TextField
              required
              variant="filled"
              label="food/ingredient"
              size="small"
              margin="normal"
              sx={{ margin: "10px" }}
            />
            <TextField
              required
              variant="filled"
              label="category"
              select
              size="small"
              sx={{ width: "200px", margin: "10px" }}
              margin="normal"
            >
              <MenuItem>Meats</MenuItem>
              <MenuItem>Fruits</MenuItem>
              <MenuItem>Vegetable</MenuItem>
              <MenuItem>+ Add</MenuItem>
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "3",
            }}
          >
            <TextField
              variant="filled"
              label="quantity"
              size="small"
              margin="normal"
              sx={{ margin: "10px" }}
            />
            <TextField
              required
              vvariant="filled"
              label="purchase date"
              size="small"
              margin="normal"
              sx={{ margin: "10px" }}
            />
            <TextField
              required
              variant="filled"
              label="expiration date"
              size="small"
              margin="normal"
              sx={{ margin: "10px" }}
            />
          </Grid>
        </Grid>
        <Button variant="primary" sx={buttonSx}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default SearchForm;
