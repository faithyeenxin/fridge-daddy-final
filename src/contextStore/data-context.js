import React from "react";

const DataContext = React.createContext({
  user: "",
  evergreen: [], //objects would be contained in the array
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
