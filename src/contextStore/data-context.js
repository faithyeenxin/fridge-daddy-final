import React from "react";

const DataContext = React.createContext({
  username: "",
  password: "",
  evergreen: [],
  rotten: [],
  trashed: [],
  addEvergreen: () => {},
  addRotten: () => {},
  removeEvergreen: () => {},
  removeRotten: () => {},
  removeFromTrash: () => {},
});

export default DataContext;

// addEvergreen: addEvergreenHandler,
//     addRotten: addRottenHandler,
//     removeEvergreen: removeEvergreenHandler,
//     removeRotten: removeRottenHandler,
//     removeFromTrash: removeFromTrashHandler,
