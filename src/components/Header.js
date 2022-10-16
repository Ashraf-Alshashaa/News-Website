import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoriesNavList from "./CategoriesNavList";

const Header = () => {
  const [isCategoriesList, setIsCategoriesList] = useState(false);

  const catagoriesDesktopProps = {
    name: "category-link",
    Id: "categories-Desktop",
    Key: "navDesktop",
    textContainer: false,
    containerName: "categories-nav-container",
    setIsCategoriesList: setIsCategoriesList,
  };

  const catagoriesMobileProps = {
    name: "category-link",
    Id: "categories-home",
    Key: "navMobile",
    textContainer: false,
    containerName: `${!isCategoriesList ? "nonvisible" : "visible"}`,
    setIsCategoriesList: setIsCategoriesList,
  };

  return (
    <header className="App-header">
      <Link className="logo" to={"/"}>
        <h1>News Website</h1>
      </Link>
      {window.innerWidth > 820 ? (
        <CategoriesNavList props={catagoriesDesktopProps} />
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
      <CategoriesNavList props={catagoriesMobileProps} />
    </header>
  );
};

export default Header;
