import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import Resume from "./Resume";
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter basename="/my-cloud-resume">
    <App />
  </BrowserRouter>
);