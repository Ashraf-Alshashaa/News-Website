import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButtons = (props) => {
  const navigate = useNavigate();

  return (
    <div className="news-page-buts-container">
      <button onClick={() => navigate(-1)}>{props.textContent.back}</button>
      <button onClick={() => navigate(+1)}>{props.textContent.forward}</button>
    </div>
  );
};

export default NavigateButtons;
