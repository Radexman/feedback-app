//* Importing packages and styles
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

//* Creating root element for app render
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
