import React, { useContext } from "react";
import { List, ListItem, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ListItemText from "@mui/material/ListItemText";
import DataContext from "../../contextStore/data-context";

const RecipeList = ({ name }) => {
  const dataCtx = useContext(DataContext);
  const extractedList = dataCtx[name].map((data) => {
    return (
      <ListItem
        key={`${data.item}-${data.category}-${Math.random()}`}
        secondaryAction={
          name !== "trashed" ? (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => console.log("add button was clicked")}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => console.log("remove button was clicked")} //to add removeTrashHandler here
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          )
        }
      >
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
          minWidth: 300,
          minHeight: 500,
          maxHeight: 500,
          padding: 2,
        }}
      >
        {extractedList}
      </List>
    </Paper>
  );
};

export default RecipeList;
