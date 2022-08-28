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

const defaultShelfLifeState = { shelfData: mockShelfLifeData };

const shelfLifeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHELF":
      const newShelfList = state.shelfData.concat(action.item);
      console.log("new shelf life list");
      console.log(newShelfList);
      return { shelfData: newShelfList };
  }
};

const ShelfLifeProvider = (props) => {
  const [shelfState, dispatchShelfAction] = useReducer(
    shelfLifeReducer,
    defaultShelfLifeState
  );
  const addShelfDataHandler = (item) => {
    console.log("adding to shelf");
    dispatchShelfAction({ type: "ADD_SHELF", item: item });
  };

  const removeShelfDataHandler = () => {
    console.log("removing from shelf");
  };

  const shelfLifeContext = {
    shelfData: shelfState.shelfData,
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
