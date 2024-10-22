import React from "react";
import { Link } from "react-router-dom";
import "../styles/characters.css";
import logo from "../img/Star_Wars_Logo.png";

function Characters() {
  return (
    <div className="character-screen terminal">
      <Link to="/">
        <div className="logoCont">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="charactersMainCont">
        <h2 className="charactersSubtitle">Characters</h2>
        {/* Future character data will appear here */}
        <div className="character-highlight">
          <p>Select a character to view their details...</p>
        </div>
      </div>
      {/* particles */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
    </div>
  );
}

export default Characters;
