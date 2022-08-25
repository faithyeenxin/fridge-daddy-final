import { Card, Container, Grid } from "@mui/material";
import React from "react";
import VirtualizedList from "../../list/LonglistItem";

const EvergreenContentSection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "8%",
        marginBottom: "8%",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Card>
            <VirtualizedList />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <VirtualizedList />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EvergreenContentSection;
