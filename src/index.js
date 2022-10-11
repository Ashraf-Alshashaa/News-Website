import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";
import DetailsPage from "./DetailsPage";
import HomePage from "./HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<NewsPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/readLater" element={<h1>Read later page</h1>} />
      </Route>
    </Routes>
  </Router>
);
