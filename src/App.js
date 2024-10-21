import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import logo from "../src/img/Star_Wars_Logo.png";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;
