import React from "react";
import { Link } from "react-router-dom";

const CategoriesNavList = (props) => {
  const { name, Id, Key, textContainer, containerName, setIsCategoriesList } =
    props.props;

  const categories = [
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
    <div
      className={containerName}
      onClick={(e) => {
        e.target.className === "category-link" && setIsCategoriesList(false);
      }}
    >
      {categories.map(({ category, icon }, idx) => (
        <Link
          key={category + Key}
          className={name}
          to={`/${category}`}
          id={Id + idx}
        >
          {icon}
          {textContainer ? <h2>{category}</h2> : category}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNavList;
