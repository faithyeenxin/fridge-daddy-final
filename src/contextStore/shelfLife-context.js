import React from "react";

const ShelfContext = React.createContext({
  shelfData: [],
  shelfLifeInFocus: "",
  addShelfData: () => {},
  removeShelfData: () => {},
  displayShelfData: () => {},
});

export default ShelfContext;
