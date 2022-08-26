import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardActions, CardHeader, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import mockUserData from "../testingFolder/mockUserData";

const buttonSx = {
  margin: "0 auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
};

const MyListItem = ({ name, descrip }) => {
  const navigate = useNavigate();

  const extractedData = mockUserData[name.toLowerCase()].slice(0, 5);
  const extractedList = extractedData.map((data) => {
    console.log(data);
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            {name !== "Trashed" ? <DeleteIcon /> : <RestoreFromTrashIcon />}
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.item}
          secondary={`Category: ${data.category}`}
        />
      </ListItem>
    );
  });
  return (
    <Grid item s={4} sx={{ margin: "2%" }}>
      <Card>
        <CardHeader
          title={name}
          subheader={descrip}
          sx={{ color: "#f93f23" }}
        />
        <CardContent>
          <List
            size="lg"
            variant="outlined"
            sx={{ borderRadius: "sm", minWidth: 300, minHeight: 350 }}
          >
            {extractedList}
          </List>
        </CardContent>
        <CardActions>
          <Button
            value={name}
            sx={buttonSx}
            size="small"
            onClick={(event) => {
              if (event.target.value !== "Evergreen") {
                navigate("/baddies");
              } else {
                navigate("/evergreen");
              }
            }}
          >
            Click here to view all
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MyListItem;
