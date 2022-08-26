import React, { useState, useReducer } from "react";
import DataContext from "./data-context.js";

// 4) a constant that stores the default state
const defaultDataState = { evergreen: [], rotten: [], trashed: [] };

// 1) the action will be dispatched by us later in the function
// 2) the state is the latest snapshot of the state managed by the reducer
// 3) the reducer will then return a new state snapshot
const dataReducer = (state, action) => {
  // 13) if statement will check which type of action we are dispatching
  if (action.type === "ADD_EVERGREEN") {
    // 14) .concat() doesn't edit the existing array but returns a new array
    // 15) this is important because we need to update our state in an immutable way
    const updatedEvergreen = state.evergreen.concat(action.item);
    const updatedRotten = state.rotten;
    const updatedTrashed = state.trashed;

    // 16) we will then return our new state
    return {
      evergreen: updatedEvergreen,
      rotten: updatedRotten,
      trashed: updatedTrashed,
    };
  }
  return defaultDataState;
};

const DataProvider = (props) => {
  // 5) we will then call the reducer inside our provider
  // 6) the first argument is the reducer function we created outside
  // 7) the second argument is the initial state which we set as the default state
  // 8) useReducer will then return an array with exactly 2 elements- which we can destructure
  // 9) the first element is our state snapshot
  // 10) the second element is a function that allows us to dispatch an action to the reducer
  const [dataState, dispatchDataAction] = useReducer(
    dataReducer,
    defaultDataState
  );

  // 11) the dispatch function will take in an object that have:
  // --> a property that helps us identify what action it will dispatch
  //  [this allows us to run different code in the reducer function (dataReducer)]
  // --> another property will pass the item that will be part of action
  // 12) we will now go to the reducer function to add some logic (see reducer function- dataReducer)
  const addEvergreenHandler = (item) => {
    dispatchDataAction({ type: "ADD_EVERGREEN", item: item });
  };
  // const removeEvergreenHandler = (item) => {
  //   dispatchDataAction({ type: "REMOVE_EVERGREEN", item: item });
  // };

  // const removeFromTrashHandler = (item) => {};
  // const checkEvergreenHandler = (item) => {};
  // const tranferEvergreenToRottenHandler = (item) => {};

  // const transferEvergreenToTrashedHandler = (item) => {};

  const dataContext = {
    //this is the concrete data which we will update overtime,
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
