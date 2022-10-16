import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButtons = (props) => {
  const navigate = useNavigate();
  const { back, forward } = props.textContent;
  return (
    <div className="news-page-buts-container">
      <button onClick={() => navigate(-1)}>{back}</button>
      <button onClick={() => navigate(+1)}>{forward}</button>
    </div>
  );
};

export default NavigateButtons;
