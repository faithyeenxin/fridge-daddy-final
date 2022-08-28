import React, { useReducer } from "react";
import ShelfContext from "./shelfLife-context.js";

import mockShelfLifeData from "../components/testingFolder/mockShelfLifeData";

/* 
mockShelfLifeData is a list of objects like below
{
  id: "rec1koHMBhfW8dt8r",
  name: "hard cheese",
  shelflife: "31",
  dateAdded: "2022-08-26",
  contributor: "Faith ",
  imgUrl: "https://spoonacular.com/cdn/ingredients_250x250/brie.jpg",
};
*/

const defaultShelfLifeState = mockShelfLifeData;

const shelfLifeReducer = (state, action) => {};

const ShelfLifeProvider = (props) => {
  const [shelfState, dispatchShelfAction] = useReducer(
    shelfLifeReducer,
    defaultShelfLifeState
  );
  const addShelfDataHandler = () => {
    console.log("adding to shelf");
  };

  const removeShelfDataHandler = () => {
    console.log("removing from shelf");
  };

  const shelfLifeContext = {
    shelfData: shelfState,
    addShelfData: addShelfDataHandler,
    removeShelfData: removeShelfDataHandler,
  };
  return (
    <ShelfContext.Provider value={shelfLifeContext}>
      {props.children}
    </ShelfContext.Provider>
  );
};

export default ShelfLifeProvider;
