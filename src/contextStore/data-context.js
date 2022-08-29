import React from "react";

const DataContext = React.createContext({
  username: "",
  password: "",
  evergreen: [],
  rotten: [],
  trashed: [],
  moveToTrash: () => {},
  addEvergreen: () => {},
  addRotten: () => {},
  removeEvergreen: () => {},
  removeRotten: () => {},
  removeFromTrash: () => {},
  checkEvergreen: () => {},
});

export default DataContext;
