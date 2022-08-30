import React, { useState, useContext } from "react";
import { List, ListItem, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ListItemText from "@mui/material/ListItemText";
import DataContext from "../../contextStore/data-context";

// {
//   id: "214564658425",
//   item: "fish",
//   quantity: " 3 fillet",
//   category: "fish",
//   purchaseDate: "2022-08-26",
//   expiryDate: "2022-09-05",
// }

const RecipeList = ({ addToList, removeFromList }) => {
  const dataCtx = useContext(DataContext);
  const minifiedEvergreenData = dataCtx.evergreen.map((item) => {
    return {
      name: item.item,
      quantity: item.quantity,
      itemAdded: false,
    };
  });
  const [evergreenList, setEvergreenList] = useState(minifiedEvergreenData);

  const extractedList = evergreenList.map((data) => {
    return (
      <ListItem
        key={`${data.name}-${Math.random()}`}
        secondaryAction={
          data.itemAdded === true ? (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                const newEvergreenList = evergreenList.map((item) => {
                  return item.name === data.name
                    ? {
                        name: item.name,
                        quantity: item.quantity,
                        itemAdded: false,
                      }
                    : item;
                });
                setEvergreenList(newEvergreenList);
                removeFromList(data);
              }}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                const newEvergreenList = evergreenList.map((item) => {
                  return item.name === data.name
                    ? {
                        name: item.name,
                        quantity: item.quantity,
                        itemAdded: true,
                      }
                    : item;
                });
                setEvergreenList(newEvergreenList);
                addToList(data);
              }} //to add removeTrashHandler here
            >
              <AddCircleOutlineIcon />
            </IconButton>
          )
        }
      >
        <ListItemText
          primary={data.name}
          secondary={`quantity: ${data.quantity}`}
        />
      </ListItem>
    );
  });

  return (
    <Paper
      style={{
        width: "100%",
        minHeight: 900,
        // maxHeight: 900,
        overflow: "auto",
      }}
    >
      <List
        size="lg"
        variant="outlined"
        sx={{
          borderRadius: "sm",
          width: "80%",
          minHeight: 900,
          // maxHeight: 900,
          margin: 2,
          padding: 2,
        }}
      >
        {extractedList}
      </List>
    </Paper>
  );
};

export default RecipeList;
