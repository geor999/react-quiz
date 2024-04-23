// React Component
import { useState } from "react";
import "./pages/style.css";
import {Routes,Route,Link } from "react-router-dom";
import Authentication from "./pages/Authentication";

export default function Root() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`desktop ${darkMode ? "dark" : ""}`}>
      <div className={`frame ${darkMode ? "dark" : ""}`}>
        <img
          className="vector"
          alt="Vector"
          src={`${
            darkMode
              ? "src/assets/dark-mode-toggle-icon.svg"
              : "src/assets/light-mode-toggle-icon.svg"
          }`}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
      </div>
      <Routes>
        <Route path="/" element={<Authentication rootDarkMode={darkMode}/>}/>
        <Route path="/giannis" element={<div>giannis</div>}/>
        <Route />
      </Routes>
    </div>
  );
}
