import React, { useState, useEffect, useReducer } from "react";
import DataContext from "./data-context.js";

import mockUserData from ".././components/testingFolder/mockUserData";
import differenceInDays from "date-fns/differenceInDays";
import format from "date-fns/format";

/*
mockUserData is an object like below
const mockUserData = {
  username: "Faith",
  password: "123456",
  evergreen: [
    {
      id: "214564658425",
      item: "fish",
      quantity: " 3 fillet",
      category: "fish",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
    },
    
  ],
  rotten: [
    {
      id: "123213546",
      item: "steamed eggs",
      quantity: "12 eggs",
      category: "eggs",
      purchaseDate: "2021-08-26",
      expiryDate: "2022-06-12",
    },
  ],
  trashed: [
    {
      id: "123654662",
      item: "banana",
      quantity: "1 bunch",
      category: "fruit",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-01-05",
    },
    
  ],
};
*/
const defaultDataState = mockUserData;

let today = new Date();
// today = format(today, "yyyy-MM-dd");

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
    case "ADD_ROTTEN":
      updatedUser = state.username;
      updatedPassword = state.password;
      updatedEvergreen = state.evergreen;
      updatedRotten = state.rotten.concat(action.item);
      updatedTrashed = state.trashed;

      return {
        username: updatedUser,
        password: updatedPassword,
        evergreen: updatedEvergreen,
        rotten: updatedRotten,
        trashed: updatedTrashed,
      };
      break;
    case "REMOVE_EVERGREEN":
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
    case "REMOVE_ROTTEN":
      updatedUser = state.username;
      updatedPassword = state.password;
      updatedEvergreen = state.evergreen;
      updatedRotten = state.rotten.filter((item) => action.item.id !== item.id);
      updatedTrashed = state.trashed.concat(action.item);

      return {
        username: updatedUser,
        password: updatedPassword,
        evergreen: updatedEvergreen,
        rotten: updatedRotten,
        trashed: updatedTrashed,
      };
    case "REMOVE_FROM_TRASH":
      const numOfDays = differenceInDays(
        new Date(action.item.expiryDate),
        new Date(today)
      );
      if (numOfDays > 0) {
        updatedUser = state.username;
        updatedPassword = state.password;
        updatedEvergreen = state.evergreen.concat(action.item);
        updatedRotten = state.rotten;
        updatedTrashed = state.trashed.filter(
          (item) => action.item.id !== item.id
        );
        return {
          username: updatedUser,
          password: updatedPassword,
          evergreen: updatedEvergreen,
          rotten: updatedRotten,
          trashed: updatedTrashed,
        };
      } else {
        updatedUser = state.username;
        updatedPassword = state.password;
        updatedEvergreen = state.evergreen;
        updatedRotten = state.rotten.concat(action.item);
        updatedTrashed = state.trashed.filter(
          (item) => action.item.id !== item.id
        );
        return {
          username: updatedUser,
          password: updatedPassword,
          evergreen: updatedEvergreen,
          rotten: updatedRotten,
          trashed: updatedTrashed,
        };
      }
    case "CHECK_EVERGREEN":
      const overdueItems = state.evergreen.filter(
        (item) => differenceInDays(new Date(item.expiryDate), new Date()) < 0
      );
      updatedUser = state.username;
      updatedPassword = state.password;
      updatedEvergreen = state.evergreen.filter(
        (item) => differenceInDays(new Date(item.expiryDate), new Date()) > 0
      );
      updatedRotten = state.rotten.concat(overdueItems);
      updatedTrashed = state.trashed;

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

  useEffect(() => {
    dispatchDataAction({ type: "CHECK_EVERGREEN", item: dataState });
  }, []);

  const addEvergreenHandler = (item) => {
    dispatchDataAction({ type: "ADD_EVERGREEN", item: item });
  };

  const addRottenHandler = (item) => {
    dispatchDataAction({ type: "ADD_ROTTEN", item: item });
  };
  const removeEvergreenHandler = (item) => {
    dispatchDataAction({ type: "REMOVE_EVERGREEN", item: item });
  };

  const removeRottenHandler = (item) => {
    dispatchDataAction({ type: "REMOVE_ROTTEN", item: item });
  };

  const removeFromTrashHandler = (item) => {
    dispatchDataAction({ type: "REMOVE_FROM_TRASH", item: item });
  };
  // const checkEvergreenHandler = (item) => {};

  const dataContext = {
    //this is the concrete data which we will update overtime and pass to our context
    username: dataState.username,
    password: dataState.password,
    evergreen: dataState.evergreen,
    rotten: dataState.rotten,
    trashed: dataState.trashed,
    addEvergreen: addEvergreenHandler,
    addRotten: addRottenHandler,
    removeEvergreen: removeEvergreenHandler,
    removeRotten: removeRottenHandler,
    removeFromTrash: removeFromTrashHandler,
    // checkEvergreen: checkEvergreenHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
