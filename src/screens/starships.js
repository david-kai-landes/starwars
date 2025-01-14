import React, { useState, useEffect } from "react";
import "../styles/starships.css";
import { Link } from "react-router-dom";
import logo from "../img/Star_Wars_Logo.png";
//
import MadalStarShip from "../components/MadalStarShip";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStarShip, setSelectedStarShip] = useState(null);

  const handleOpenModal = (starships) => {
    setSelectedStarShip(starships);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStarShip(null);
  };

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch("https://swapi.py4e.com/api/starships/").then(
          (response) => response.json()
        );
        setStarships(data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    })();
  }, []);

  // console.log("DATAAA == ", starships);
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
          {starships.map((starships, index) => (
            <div
              key={index}
              className="starship-card"
              onClick={() => handleOpenModal(starships)}
            >
              <div className="glow" />
              <p>{starships.name}</p>
              <p>Model: {starships.model}</p>
            </div>
          ))}
        </div>
      </div>
      <MadalStarShip
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedStarShip}
      />
    </div>
  );
};

export default Starships;
