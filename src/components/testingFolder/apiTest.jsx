import React, { useState } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyh0OZHb1wxgrmg4" }).base(
  "appwwF2bdRhaVnPBM"
);
const shelfLifeTable = base("shelfLife");

//////////////////////////////////////////////////////
//// * List of Records
//// * (.select(), .eachPage(), .all(), .firstPage())
//////////////////////////////////////////////////////
const [allRecords, setAllRecords] = useState([]);
const getRecords = async () => {
  const records = await shelfLifeTable.select().all();
  console.log("length of records: " + records.length);
  // setAllRecords(records);
  const filteredRecords = records.map((record) => {
    return {
      id: record.id,
      name: record.fields.name,
      shelflife: record.fields.shelflife,
      contributor: record.fields.contributor,
      imgUrl: record.fields.imgUrl,
    };
  });
  setAllRecords([filteredRecords]);
};

//////////////////////////////////////////////////////
//// * Retrieve a Record with name of record
//// * (.find(), .select({filterByFormula: }))
//////////////////////////////////////////////////////
const [recordFound, setRecordFound] = useState({});
const getRecordByName = async (name) => {
  const records = await shelfLifeTable
    .select({
      filterByFormula: `SEARCH("${name}",{name})`,
    })
    .all();
  if (records.length > 0) {
    const filteredRecords = records.map((record) => {
      return {
        id: record.id,
        name: record.fields.name,
        shelflife: record.fields.shelflife,
        contributor: record.fields.contributor,
        imgUrl: record.fields.imgUrl,
      };
    });
    setRecordFound(filteredRecords);
  } else {
    console.log("record not found");
  }
};

//////////////////////////////////////////////////////
//// * Create a Record
//// * (.create())
//////////////////////////////////////////////////////
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

// record should be in the form of {name:"  ", shelflife:" ",dateAdded:" ", contributor:" ", imgUrl:"  "}

//////////////////////////////////////////////////////
//// * Delete a Record
//// * (.delete())
//////////////////////////////////////////////////////
const deleteRecord = async (id) => {
  const deletedRecord = await shelfLifeTable.destroy(id);
  console.log(deletedRecord);
};
