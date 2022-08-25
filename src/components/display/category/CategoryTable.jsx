import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";

const columns = [
  { field: "name", headerName: "Name", width: 300 },
  { field: "shelfLife", headerName: "Shelf life (Days)", width: 300 },
  { field: "dateAdded", headerName: "Date Added", width: 300 },
  { field: "contributer", headerName: "Contributer", width: 300 },
];

const rows = [
  {
    id: 1,
    name: "Veggies",
    shelfLife: 3,
    dateAdded: "16/12/22",
    contributer: "Alice",
  },
  {
    id: 2,
    name: "Fish",
    shelfLife: 2,
    dateAdded: "03/02/22",
    contributer: "Mary",
  },
  {
    id: 3,
    name: "Potatoes",
    shelfLife: 10,
    dateAdded: "09/08/22",
    contributer: "Leonard",
  },
  {
    id: 4,
    name: "Apples",
    shelfLife: 7,
    dateAdded: "15/01/22",
    contributer: "Elvis",
  },
  {
    id: 5,
    name: "Raw Eggs",
    shelfLife: 35,
    dateAdded: "07/12/22",
    contributer: "Clarence",
  },
  {
    id: 6,
    name: "Cooked Eggs",
    shelfLife: 7,
    dateAdded: "31/12/22",
    contributer: "Justin",
  },
  {
    id: 7,
    name: "Pastry",
    shelfLife: 7,
    dateAdded: "04/05/22",
    contributer: "Julian",
  },
  {
    id: 8,
    name: "Fruit",
    shelfLife: 7,
    dateAdded: "5/11/22",
    contributer: "Donnie",
  },
];

const CategoryTable = () => {
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
