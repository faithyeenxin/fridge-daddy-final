import React from "react";

const DataContext = React.createContext({
  user: "",
  evergreen: [],
  rotten: [],
  trashed: [],
  checkEvergreen: () => {},
  removeEvergreen: () => {},
  addEvergreen: () => {},
  transferEvergreenToRotten: () => {},
  transferEvergreenToTrashed: () => {},
  removeFromTrash: () => {},
});

export default DataContext;
