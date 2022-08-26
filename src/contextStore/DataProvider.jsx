import React from "react";
import DataContext from "./data-context.js";

const DataProvider = () => {
  const dataContext = {
    //this is the concrete data which we will update overtime
    user: "",
    evergreen: [],
    rotten: [],
    trashed: [],
    checkEvergreen: checkEvergreenHandler,
    removeEvergreen: removeEvergreenHandler,
    addEvergreen: addEvergreenHandler,
    transferEvergreenToRotten: tranferEvergreenToRottenHandler,
    transferEvergreenToTrashed: transferEvergreenToTrashedHandler,
    removeFromTrash: removeFromTrashHandler
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
