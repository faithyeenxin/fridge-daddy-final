import React from "react";

const ShelfContext = React.createContext({
  shelfData: [],
  addShelfData: () => {},
  removeShelfData: () => {},
});

export default ShelfContext;
