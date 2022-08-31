import { Card, CardHeader, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ScrollableList from "../../list/ScrollableList";

const BaddiesContentSection = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Grid container justifyContent="center">
        {/* <Grid
          item
          s={12}
          md={2}
          sx={{
            margin: "2%",
          }}
        >
          <Card sx={{ width: "100%", height: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
              Not sure what to add here honestly, could be ads if this was
              commercial haha
            </Typography>
          </Card>
        </Grid> */}
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
              title="ALL ROTTEN"
              subheader="scroll through list to view all items"
              sx={{ color: "#f93f23" }}
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
              title="ALL TRASHED"
              subheader="scroll through list to view all items"
              sx={{ color: "#f93f23" }}
            />
            <ScrollableList name="trashed" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BaddiesContentSection;
