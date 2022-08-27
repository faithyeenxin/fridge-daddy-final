import React, { useReducer } from "react";
import DataContext from "./data-context.js";

const defaultDataState = { evergreen: [], rotten: [], trashed: [] };

const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVERGREEN":
      const updatedEvergreen = state.evergreen.concat(action.item);
      const updatedRotten = state.rotten;
      const updatedTrashed = state.trashed;

      return {
        evergreen: updatedEvergreen,
        rotten: updatedRotten,
        trashed: updatedTrashed,
      };
      break;
    default:
      return defaultDataState;
      break;
  }
};

const DataProvider = (props) => {
  const [dataState, dispatchDataAction] = useReducer(
    dataReducer,
    defaultDataState
  );

  const addEvergreenHandler = (item) => {
    dispatchDataAction({ type: "ADD_EVERGREEN", item: item });
  };

  // const removeEvergreenHandler = (item) => {};
  // const removeFromTrashHandler = (item) => {};
  // const checkEvergreenHandler = (item) => {};
  // const tranferEvergreenToRottenHandler = (item) => {};
  // const transferEvergreenToTrashedHandler = (item) => {};

  const dataContext = {
    //this is the concrete data which we will update overtime and pass to our context
    evergreen: dataState.evergreen,
    rotten: dataState.rotten,
    trashed: dataState.trashed,
    addEvergreen: addEvergreenHandler,
    // removeEvergreen: removeEvergreenHandler,
    // checkEvergreen: checkEvergreenHandler,
    // transferEvergreenToRotten: tranferEvergreenToRottenHandler,
    // transferEvergreenToTrashed: transferEvergreenToTrashedHandler,
    // removeFromTrash: removeFromTrashHandler
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
