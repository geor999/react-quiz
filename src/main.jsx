import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
  </React.StrictMode>
);
