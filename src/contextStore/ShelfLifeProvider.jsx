import React, { useState, useEffect, useReducer } from "react";
import ShelfContext from "./shelfLife-context.js";

//////////////////////////////////////////////////////
//// * AirTable
//////////////////////////////////////////////////////

import Airtable from "airtable";
const base = new Airtable({ apiKey: "keyh0OZHb1wxgrmg4" }).base(
  "appwwF2bdRhaVnPBM"
);
const shelfLifeTable = base("shelfLife");
// this defaultDataState will be pulled from airTableAPI and any changes will be updated here too!

const getRecords = async () => {
  const records = await shelfLifeTable.select().all();
  console.log("shelf life records");
  console.log(records);
  const filteredRecords = records.map((record) => {
    return {
      id: record.id,
      name: record.fields.name,
      shelflife: record.fields.shelflife,
      dateAdded: record.fields.dateAdded,
      contributor: record.fields.contributor,
      imgUrl: record.fields.imgUrl,
    };
  });
  // console.log(filteredRecords);
  return filteredRecords;
};

const createRecord = async (record) => {
  const records = await shelfLifeTable
    .select({ filterByFormula: `SEARCH("${record.name}",{name})` })
    .all();
  if (records.length === 0) {
    const createdRecord = await shelfLifeTable.create(record);
    console.log(createdRecord);
  } else {
    console.log(`record cannot be created as item (${record.name}) exists`);
  }
};

//////////////////////////////////////////////////////
//// *
//////////////////////////////////////////////////////

const defaultShelfLifeState = { shelfData: [] };

const shelfLifeReducer = (state, action) => {
  let newShelfList;
  let newShelfLifeInFocus;
  switch (action.type) {
    case "ADD_SHELF":
      newShelfList = state.shelfData.concat(action.item);
      newShelfLifeInFocus = state.shelfLifeInFocus;
      const itemToAdd = {
        name: action.item.name,
        shelflife: action.item.shelflife,
        dateAdded: action.item.dateAdded,
        contributor: action.item.contributor,
        imgUrl: action.item.imgUrl,
      };
      createRecord(itemToAdd);
      return {
        shelfData: newShelfList,
        shelfLifeInFocus: newShelfLifeInFocus,
      };

    case "DISPLAY_SHELF":
      // console.log(action.item.target.value);
      // to check through shelf life data and return the shelf life day
      const result = state.shelfData.filter(
        (item) => item.name === action.item.target.value
      );
      const firstResult = result[0];
      // console.log(firstResult.shelflife);
      newShelfList = state.shelfData;
      newShelfLifeInFocus = firstResult.shelflife;
      return {
        shelfData: newShelfList,
        shelfLifeInFocus: newShelfLifeInFocus,
      };
    case "GET_SHELF":
      // console.log(action.item);
      newShelfList = action.item;
      newShelfLifeInFocus = state.newShelfLifeInFocus;
      // console.log(newShelfList);
      return {
        shelfData: newShelfList,
        shelfLifeInFocus: newShelfLifeInFocus,
      };
  }
};

const ShelfLifeProvider = (props) => {
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    getRecords()
      .then((res) => {
        dispatchShelfAction({ type: "GET_SHELF", item: res });
      })
      .then(() => {
        setStatus("resolved");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, []);

  const [shelfState, dispatchShelfAction] = useReducer(
    shelfLifeReducer,
    defaultShelfLifeState
  );

  const addShelfDataHandler = (item) => {
    // console.log("adding to shelf");
    dispatchShelfAction({ type: "ADD_SHELF", item: item });
  };

  const removeShelfDataHandler = () => {
    // console.log("removing from shelf");
  };

  const displayShelfDataHandler = (item) => {
    // console.log("displaying shelf life");
    dispatchShelfAction({ type: "DISPLAY_SHELF", item: item });
  };

  const shelfLifeContext = {
    shelfData: shelfState.shelfData,
    shelfLifeInFocus: shelfState.shelfLifeInFocus,
    addShelfData: addShelfDataHandler,
    removeShelfData: removeShelfDataHandler,
    displayShelfData: displayShelfDataHandler,
  };
  return (
    <ShelfContext.Provider value={shelfLifeContext}>
      {props.children}
    </ShelfContext.Provider>
  );
};

export default ShelfLifeProvider;
