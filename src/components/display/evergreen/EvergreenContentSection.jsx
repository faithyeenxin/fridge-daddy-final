import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ScrollableList from "../../list/ScrollableList";

const EvergreenContentSection = () => {
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
          <Card>
            <Paper>
              <Typography>Some content will be here</Typography>
            </Paper>
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
            <ScrollableList />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EvergreenContentSection;
