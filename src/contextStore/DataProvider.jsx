import React, { useReducer } from "react";
import DataContext from "./data-context.js";

const defaultDataState = { evergreen: [], rotten: [], trashed: [] };

const dataReducer = (state, action) => {
  let updatedEvergreen;
  let updatedRotten;
  let updatedTrashed;
  switch (action.type) {
    case "ADD_EVERGREEN":
      updatedEvergreen = state.evergreen.concat(action.item);
      updatedRotten = state.rotten;
      updatedTrashed = state.trashed;

      return {
        evergreen: updatedEvergreen,
        rotten: updatedRotten,
        trashed: updatedTrashed,
      };
      break;
    case "REMOVE_ITEM":
      console.log(action.type);
      updatedEvergreen = state.evergreen.filter(
        (item) => action.item.id !== item.id
      );
      updatedRotten = state.rotten;
      updatedTrashed = state.trashed.concat(action.item);

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

  const moveToTrashHandler = (item) => {
    dispatchDataAction({ type: "REMOVE_ITEM", item: item });
  };
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
    moveToTrash: moveToTrashHandler,
    // removeFromTrash: removeFromTrashHandler
    // checkEvergreen: checkEvergreenHandler,
    // transferEvergreenToRotten: tranferEvergreenToRottenHandler,
    // transferEvergreenToTrashed: transferEvergreenToTrashedHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
