import React from "react";

const DataContext = React.createContext({
  username: "",
  password: "",
  evergreen: [],
  rotten: [],
  trashed: [],
  checkEvergreen: () => {},
  moveToTrash: () => {},
  addEvergreen: () => {},
  transferEvergreenToRotten: () => {},
  transferEvergreenToTrashed: () => {},
  removeFromTrash: () => {},
});

export default DataContext;
