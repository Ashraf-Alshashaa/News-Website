import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "./contexts/categoriesContext";

const Header = () => {
  const [isCategoriesList, setIsCategoriesList] = useState(false);
  const [categories] = useContext(CategoriesContext);

  const categoriesNavItems = categories.map(({ category, icon }) => {
    return (
      <Link key={category} className="category-link" to={`/${category}`}>
        {icon}
        {category}
      </Link>
    );
  });

  return (
    <header className="App-header">
      <Link className="logo" to={"/"}>
        <h1>News Website</h1>
      </Link>
      {window.innerWidth > 820 ? (
        <div className="categories-nav-container">{categoriesNavItems}</div>
      ) : (
        <div className="nav-list-but-container">
          <button
            onClick={() => {
              setIsCategoriesList((value) => !value);
            }}
            className={
              !isCategoriesList
                ? "fas fa-bars list-catagories-icon nav-list-but"
                : "fas fa-times list-catagories-icon nav-list-but"
            }
          ></button>
        </div>
      )}
      <div className="read-later-link-container">
        <Link to={"/readLater"} className="read-later-link">
          <i className="fa-solid fa-bookmark"></i>
          My Articles
        </Link>
      </div>
      <div
        onClick={(e) => {
          e.target.className === "category-link" && setIsCategoriesList(false);
        }}
        className={!isCategoriesList ? "nonvisible" : "visible"}
      >
        {categoriesNavItems}
      </div>
    </header>
  );
};

export default Header;
