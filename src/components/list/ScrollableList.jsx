import React, { useContext } from "react";
import { Avatar, List, ListItem, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import differenceInDays from "date-fns/differenceInDays";
import format from "date-fns/format";
import DataContext from "../../contextStore/data-context";

let today = new Date();
// today = format(today, "yyyy-MM-dd");

const ScrollableList = ({ name }) => {
  const dataCtx = useContext(DataContext);
  const removeEvergreenHandler = (data) => {
    dataCtx.removeEvergreen({
      id: data.id,
      item: data.item,
      quantity: data.quantity,
      category: data.category,
      purchaseDate: data.purchaseDate,
      expiryDate: data.expiryDate,
    });
  };
  const removeRottenHandler = (data) => {
    dataCtx.removeRotten({
      id: data.id,
      item: data.item,
      quantity: data.quantity,
      category: data.category,
      purchaseDate: data.purchaseDate,
      expiryDate: data.expiryDate,
    });
  };

  const removeFromTrashHandler = (data) => {
    dataCtx.removeFromTrash({
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
      new Date(data.expiryDate), //theres a bug here
      new Date(today)
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
              onClick={() =>
                name === "evergreen"
                  ? removeEvergreenHandler(data)
                  : removeRottenHandler(data)
              }
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeFromTrashHandler(data)} //to add removeTrashHandler here
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
