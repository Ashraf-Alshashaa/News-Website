import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/:category" element={<NewsPage />} />
        <Route path="/details/:id" element={<h1>details page</h1>} />
        <Route path="/readLater" element={<h1>Read later page</h1>} />
      </Route>
    </Routes>
  </Router>
);
