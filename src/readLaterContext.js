import React, { useState, createContext } from "react";

export const ReadLaterContext = createContext();

export const ReadLaterProvider = (props) => {
  const [ReadLater, setReadLater] = useState([]);
  console.log("ReadLater", ReadLater);

  return (
    <ReadLaterContext.Provider value={[ReadLater, setReadLater]}>
      {props.children}
    </ReadLaterContext.Provider>
  );
};
