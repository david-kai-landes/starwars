import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../img/Star_Wars_Logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <img src={logo} alt="logo" />
      </div>
      <div className="card-container">
        <Link to="/characters">
          <div className="card">Characters</div>
        </Link>
        <Link to="/planets">
          <div className="card">Planets</div>
        </Link>
        <Link to="/starships">
          <div className="card">Starships</div>
        </Link>
        <Link to="/vehicles">
          <div className="card">Vehicles</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
