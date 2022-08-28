import React, { useContext } from "react";
import { Avatar, List, ListItem, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import differenceInDays from "date-fns/differenceInDays";

import DataContext from "../../contextStore/data-context";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
const ScrollableList = ({ name }) => {
  const dataCtx = useContext(DataContext);

  const moveToTrashHandler = (data) => {
    dataCtx.moveToTrash({
      id: data.id,
      item: data.item,
      quantity: data.quantity,
      category: data.category,
      purchaseDate: data.purchaseDate,
      expiryDate: data.expiryDate,
    });
  };

  const extractedList = dataCtx[name].map((data) => {
    const numOfDays = differenceInDays(
      new Date(data.expiryDate.replace(/-/g, ",")), //theres a bug here
      new Date(today.replace(/-/g, ","))
    );
    let colorOfAvatar = "green";
    if (numOfDays < 0) {
      colorOfAvatar = "red";
    }
    return (
      <ListItem
        key={`${data.item}-${data.category}-${Math.random()}`}
        secondaryAction={
          name !== "trashed" ? (
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
            <Avatar sx={{ backgroundColor: colorOfAvatar }}>{numOfDays}</Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.item}
          secondary={`quantity: ${data.quantity}`}
        />
      </ListItem>
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
