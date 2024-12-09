import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Star_Wars_Logo.png";
import "../styles/vehicles.css";
//
import ModalVehicles from "../components/ModalVehicles";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicles, setSelectedVehicles] = useState(null);

  const handleOpenModal = (vehicles) => {
    setSelectedVehicles(vehicles);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicles(null);
  };

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
          {vehicles.map((vehicles, index) => (
            <div
              key={index}
              className="vehicle-card"
              onClick={() => handleOpenModal(vehicles)}
            >
              <div className="glow" />
              <p>{vehicles.name}</p>
              <p>Model: {vehicles.model}</p>
            </div>
          ))}
        </div>
      </div>
      <ModalVehicles
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedVehicles}
      />
    </div>
  );
};

export default Vehicles;
