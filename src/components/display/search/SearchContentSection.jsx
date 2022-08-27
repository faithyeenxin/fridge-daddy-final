import {
  Card,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ScrollableList from "../../list/ScrollableList";

const SearchContentSection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          s={12}
          md={5}
          sx={{
            margin: "2%",
          }}
        >
          <Card>
            <CardHeader
              title="Categories we have found"
              subheader="Psssttt! You're able to remove categories here"
              sx={{ color: "#e66351" }}
            />
            <ScrollableList name="rotten" />
          </Card>
        </Grid>
        <Grid
          item
          s={12}
          md={5}
          sx={{
            margin: "2%",
          }}
        >
          <Card>
            <CardHeader
              title="Items we have found"
              subheader="Were these what you were looking for?"
              sx={{ color: "#e66351" }}
            />
            <ScrollableList name="rotten" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchContentSection;
