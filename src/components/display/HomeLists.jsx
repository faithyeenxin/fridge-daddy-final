import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardHeader } from "@mui/material";
import { Container } from "@mui/system";
import MyListItem from "../list/MyListItem";
import { Paper } from "@mui/material";
const HomesList = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        marginTop: "5%",
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
