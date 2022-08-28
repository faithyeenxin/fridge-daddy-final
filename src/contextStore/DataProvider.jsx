import React, { useReducer } from "react";
import DataContext from "./data-context.js";

import mockUserData from ".././components/testingFolder/mockUserData";

// this defaultDataState will be pulled from airTableAPI and any changes will be updated here too!
const defaultDataState = mockUserData;

const dataReducer = (state, action) => {
  let updatedUser;
  let updatedPassword;
  let updatedEvergreen;
  let updatedRotten;
  let updatedTrashed;
  switch (action.type) {
    case "ADD_EVERGREEN":
      updatedUser = state.username;
      updatedPassword = state.password;
      updatedEvergreen = state.evergreen.concat(action.item);
      updatedRotten = state.rotten;
      updatedTrashed = state.trashed;

      return {
        username: updatedUser,
        password: updatedPassword,
        evergreen: updatedEvergreen,
        rotten: updatedRotten,
        trashed: updatedTrashed,
      };
      break;
    case "REMOVE_ITEM":
      console.log(action.type);
      updatedUser = state.username;
      updatedPassword = state.password;
      updatedEvergreen = state.evergreen.filter(
        (item) => action.item.id !== item.id
      );
      updatedRotten = state.rotten;
      updatedTrashed = state.trashed.concat(action.item);

      return {
        username: updatedUser,
        password: updatedPassword,
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
    username: dataState.username,
    password: dataState.password,
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
