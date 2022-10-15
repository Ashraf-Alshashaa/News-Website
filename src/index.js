import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import ReadLaterPage from "./pages/ReadLaterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<NewsPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/readLater" element={<ReadLaterPage />} />
      </Route>
    </Routes>
  </Router>
);
