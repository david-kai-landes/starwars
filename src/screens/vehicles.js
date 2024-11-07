import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Star_Wars_Logo.png";
import "../styles/vehicles.css";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  return (
    <div className="vehicles-screen">
      <Link to="/">
        <div className="logoCont">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="vehicleMainCont">
        <h2 className="vehicletitle">Vehicles</h2>
        <div className="vehicle-container">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <div className="glow" />
              <p>{vehicle.name}</p>
              <p>Model: {vehicle.model}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
