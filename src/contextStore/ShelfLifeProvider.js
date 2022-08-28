import React, { useReducer } from "react";
import ShelfLifeContext from "./shelfLife-context.js";

const shelfLifeReducer = (state, action) => {};

const ShelfLifeProvider = (props) => {
  const [shelfLifeState, dispatchShelfLifeAction] = useReducer(
    shelfLifeReducer,
    defaultShelfLifeState
  );

  const shelfLifeContext = {
    shelfLifeData: shelfLifeState,
    addShelfLifeData: addShelfLifeDataHandler,
    removeShelfLifeData: removeShelfLifeDataHandler,
  };
  return (
    <ShelfLifeContext.Provider value={shelfLifeContext}>
      {props.children}
    </ShelfLifeContext.Provider>
  );
};


export default ShelfLifeProvider;
