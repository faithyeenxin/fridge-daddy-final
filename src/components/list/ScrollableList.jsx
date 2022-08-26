import React from "react";
import { Avatar, List, ListItem, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import mockUserData from "../testingFolder/mockUserData";

const ScrollableList = ({ name }) => {
  const extractedData = mockUserData[name];
  const extractedList = extractedData.map((data) => {
    console.log(data);
    return (
      <ListItem
        key={`${data.item}-${data.purchaseDate}`}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            {name !== "trashed" ? <DeleteIcon /> : <RestoreFromTrashIcon />}
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
    <Paper
      style={{
        minWidth: 350,
        maxHeight: 500,
        overflow: "auto",
      }}
    >
      <List
        size="lg"
        variant="outlined"
        sx={{
          borderRadius: "sm",
          minWidth: 350,
          minHeight: 450,
        }}
      >
        {extractedList}
      </List>
    </Paper>
  );
};

export default ScrollableList;
