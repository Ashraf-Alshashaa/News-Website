import React from "react";
import { Link } from "react-router-dom";
import NavigateButtons from "./NavigateButtons";

const SmallFooter = () => {
  const backIcon = (
    <i className="fa-sharp fa-solid fa-arrow-left footer-navigate-buts"></i>
  );
  const forwardIcon = (
    <i className="fa-sharp fa-solid fa-arrow-right footer-navigate-buts"></i>
  );

  const homePageIcon = <i className="fa-sharp fa-solid fa-house"></i>;

  return (
    <footer className="small-footer">
      <NavigateButtons textContent={{ back: backIcon, forward: forwardIcon }} />
      <Link to={"/"}>{homePageIcon}</Link>
    </footer>
  );
};

export default SmallFooter;
