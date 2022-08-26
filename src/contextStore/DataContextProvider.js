import React, { createContext } from "react";

const DataContextProvider = () => {
  const dataContext = createContext({
    user: "",
    evergreen: [],
    rotten: [],
    trashed: [],
    checkEvergreen: () => {},
  });

  return (
    <dataContext.Provider value={dataContext}>
      {props.children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
