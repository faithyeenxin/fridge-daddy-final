import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import MyListItem from "../list/MyListItem";

const HomesList = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "2%",
      }}
    >
      <Grid container justifyContent="center">
        <MyListItem name="Evergreen" descrip="fresh af! 🥑" />
        <MyListItem name="Rotten" descrip="why are these still in here? 🤢" />
        <MyListItem name="Trashed" descrip="did you waste any food? 🤔" />
      </Grid>
    </Container>
  );
};

export default HomesList;
