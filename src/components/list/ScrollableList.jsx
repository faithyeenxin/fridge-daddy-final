import React, { useContext } from "react";
import { Avatar, List, ListItem, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import mockUserData from "../testingFolder/mockUserData";

import DataContext from "../../contextStore/data-context";

const ScrollableList = ({ name }) => {
  const dataCtx = useContext(DataContext);
  const extractedData = dataCtx[name];
  const extractedList = extractedData.map((data) => {
    const moveToTrashHandler = (data) => {
      dataCtx.moveToTrash({
        id: data.id,
        item: data.item,
        quantity: data.quantity,
        category: data.category,
        purchaseDate: data.purchaseDateItem,
        expiryDate: data.expiryDateItem,
      });
    };

    return (
      <ListItem
        key={`${data.item}-${data.category}-${Math.random()}`}
        secondaryAction={
          name !== "Trashed" ? (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => moveToTrashHandler(data)}
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => console.log("trash item was clicked")} //to add removeTrashHandler here
            >
              <RestoreFromTrashIcon />
            </IconButton>
          )
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.item}
          secondary={`Quantity: ${data.quantity}`}
        />
      </ListItem>

      // <ListItem
      //   key={`${data.item}-${data.purchaseDate}`}
      //   secondaryAction={
      //     <IconButton edge="end" aria-label="delete">
      //       {name !== "trashed" ? <DeleteIcon /> : <RestoreFromTrashIcon />}
      //     </IconButton>
      //   }
      // >
      //   <ListItemAvatar>
      //     <Avatar>
      //       <FolderIcon />
      //     </Avatar>
      //   </ListItemAvatar>
      //   <ListItemText
      //     primary={data.item}
      //     secondary={`Category: ${data.category}`}
      //   />
      // </ListItem>
    );
  });

  return (
    <Paper
      style={{
        minWidth: 350,
        minHeight: 500,
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
          minHeight: 500,
          maxHeight: 500,
        }}
      >
        {extractedList}
      </List>
    </Paper>
  );
};

export default ScrollableList;
