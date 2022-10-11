import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const categories = [
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
  ];

  const items = categories.map((category) => {
    return (
      <Link key={category} className="category-link" to={`/${category}`}>
        {category}
      </Link>
    );
  });

  return (
    <header className="App-header">
      <Link className="logo" to={"/"}>
        <h1>News Website</h1>
      </Link>
      <div>{items}</div>
      <Link to={"/readLater"} className="read-later-link">
        read later
      </Link>
    </header>
  );
};

export default Header;
