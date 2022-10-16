import React from "react";
import { Link } from "react-router-dom";

const ErrPage = () => {
  return (
    <div className="err-page-container">
      <h2>Sorry some thing wrong happened</h2>
      <div className="err-img-container">
        <img alt="err" className="err-img" src="/view-images/err.png" />
      </div>
      <Link to={"/"} className="err-home-button">
        <h3>Home</h3>
        <i className="fa-sharp fa-solid fa-house"></i>
      </Link>
    </div>
  );
};

export default ErrPage;
