import React, { useState, useEffect } from "react";
import "../styles/starships.css";
import { Link } from "react-router-dom";
import logo from "../img/Star_Wars_Logo.png";

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch("https://swapi.dev/api/starships/").then(
          (response) => response.json()
        );
        setStarships(data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    })();
  }, []);

  return (
    <div className="starships-screen">
      <Link to="/">
        <div className="logoCont">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="starShipMainCont">
        <h2 className="starShipTitle">Starships</h2>
        <div className="starship-container">
          {starships.map((starship, index) => (
            <div key={index} className="starship-card">
              <div className="glow" />
              <p>{starship.name}</p>
              <p>Model: {starship.model}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starships;
