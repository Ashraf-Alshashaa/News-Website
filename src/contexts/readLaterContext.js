import React, { useState, createContext } from "react";

export const ReadLaterContext = createContext();

export const ReadLaterProvider = (props) => {
  const [ReadLater, setReadLater] = useState([]);

  const setItem = (data) => {
    setReadLater((prev) =>
      !prev.includes(data)
        ? [...prev, data]
        : ReadLater.filter((item) => item !== data)
    );
  };

  return (
    <ReadLaterContext.Provider value={[ReadLater, setItem]}>
      {props.children}
    </ReadLaterContext.Provider>
  );
};
