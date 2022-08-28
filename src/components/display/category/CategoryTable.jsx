import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import ShelfContext from "../../../contextStore/shelfLife-context";
/*
{
  id: "rec1koHMBhfW8dt8r",
  name: "hard cheese",
  shelflife: "31",
  dateAdded: "2022-08-26",
  contributor: "Faith ",
  imgUrl: "https://spoonacular.com/cdn/ingredients_250x250/brie.jpg",
} 
*/

const CategoryTable = () => {
  const shelfCtx = useContext(ShelfContext);
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "shelflife", headerName: "Shelf life (Days)", width: 300 },
    { field: "dateAdded", headerName: "Date Added", width: 300 },
    { field: "contributor", headerName: "Contributer", width: 300 },
  ];

  const rows = shelfCtx.shelfData;
  return (
    <Grid
      item
      sx={{
        margin: "2%",
      }}
    >
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Grid>
  );
};

export default CategoryTable;
