import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddCategoryForm from "./AddCategoryForm";
import AddDateForm from "./AddDateForm";
import Image from "/images/full_peach_opacity.png";

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

const AddItemForm = () => {
  return (
    <Paper
      sx={{
        padding: "8vh 0vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "2%",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#33333", margin: "5%" }}
          gutterBottom
        >
          Add an Item!
        </Typography>
        <Grid container>
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
            <TextField
              required
              variant="filled"
              label="food/ingredient"
              size="small"
              helperText=" "
            />
          </Grid>
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
            <TextField
              variant="filled"
              label="quantity"
              size="small"
              helperText=" "
            />
          </Grid>

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
            <AddCategoryForm />
          </Grid>
        </Grid>
        <Grid container>
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
            <AddDateForm name="Purchase Date" />
          </Grid>
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
            <AddDateForm name="Expiration Date" />
          </Grid>
        </Grid>
        <Button variant="primary" sx={buttonSx}>
          Submit
        </Button>
      </Container>
    </Paper>
  );
};

export default AddItemForm;
