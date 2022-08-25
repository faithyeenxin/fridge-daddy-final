import React from "react";
import { Avatar, List, ListItem, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
    (value) =>
      React.cloneElement(element, {
        key: value,
      })
  );
}

const ScrollableList = ({ name }) => {
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
        {generate(
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
              primary="Single-line item"
              secondary="Secondary text"
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

export default ScrollableList;
