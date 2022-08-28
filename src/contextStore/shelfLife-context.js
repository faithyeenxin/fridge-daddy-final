import React from "react";

const ShelfLifeContext = React.createContext({
  shelfLifeData: [],
  addShelfLifeData: () => {},
  removeShelfLifeData: () => {},
});

export default ShelfLifeContext;
