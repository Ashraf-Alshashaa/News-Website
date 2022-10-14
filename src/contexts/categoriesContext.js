import React, { createContext } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = (props) => {
  const Categories = [
    {
      category: "business",
      icon: <i className="fa-sharp fa-solid fa-business-time"></i>,
    },
    {
      category: "sports",
      icon: <i className="fa-solid fa-person-running"></i>,
    },
    {
      category: "world",
      icon: <i className="fa-solid fa-globe"></i>,
    },
    {
      category: "politics",
      icon: <i className="fa-solid fa-landmark"></i>,
    },
    {
      category: "technology",
      icon: <i className="fa-solid fa-microchip"></i>,
    },
    {
      category: "startup",
      icon: <i className="fa-solid fa-chart-simple"></i>,
    },
    {
      category: "entertainment",
      icon: <i className="fa-sharp fa-solid fa-newspaper"></i>,
    },
  ];

  return (
    <CategoriesContext.Provider value={[Categories]}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
