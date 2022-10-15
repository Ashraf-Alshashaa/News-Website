import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="news-page-buts-container">
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate(+1)}>forward</button>
    </div>
  );
};

export default NavigateButtons;
