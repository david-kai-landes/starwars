import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/planets.css";
import logo from "../img/Star_Wars_Logo.png";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  // Fetch planet data from the SWAPI API
  useEffect(() => {
    (async function () {
      try {
        let data = await fetch("https://swapi.dev/api/planets/").then(
          (response) => response.json()
        );
        setPlanets(data.results);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    })();
  }, []);

  return (
    <div className="planets-screen">
      <Link to="/">
        <div className="logoCont">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <h2 className="title">Planets</h2>
      <div className="planet-container">
        {/* Dynamically render planets from API */}
        {planets.map((planet, index) => (
          <div key={index} className="planet">
            <div className="orbit"></div>
            <p>{planet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
