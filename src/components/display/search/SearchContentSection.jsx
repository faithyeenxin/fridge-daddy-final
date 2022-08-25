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
          md={4}
          sx={{
            margin: "2%",
          }}
        >
          <Card sx={{ width: "100%", height: "100%" }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
              }}
            >
              Possibly an API to show details of the items clicked can be here
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          s={12}
          md={7}
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
            <ScrollableList />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchContentSection;
