import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardActions, CardHeader, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../contextStore/data-context";

const buttonSx = {
  margin: "0 auto",
  display: "flex",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 1,
};

const MyListItem = ({ name, descrip }) => {
  const navigate = useNavigate();
  const dataCtx = useContext(DataContext);
  const extractedData = dataCtx[name.toLowerCase()];
  const lastItemIndex = extractedData.length;
  let extractedCroppedData;

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

  if (extractedData.length > 5) {
    extractedCroppedData = extractedData
      .slice(lastItemIndex - 5, lastItemIndex)
      .reverse();
  } else {
    // bug was here: must return a new copy then .reverse() can work and display properly. altho idk exactly why
    extractedCroppedData = extractedData.slice(0).reverse();
  }

  const extractedList = extractedCroppedData.map((data) => {
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
          secondary={`quantity: ${data.quantity}`}
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
            sx={{
              borderRadius: "sm",
              minWidth: 300,
              minHeight: 350,
              maxHeight: 350,
            }}
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
