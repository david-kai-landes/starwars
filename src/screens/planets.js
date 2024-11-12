import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Star_Wars_Logo.png";
import "../styles/planets.css";
//
import ModalPlanets from "../components/ModalPlanets";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const colors = ["#c2b280", "#2e8b57", "#d41404", "#A9A9A9", "#FF4500"];

  const handleOpenModal = (planet) => {
    setSelectedPlanet(planet);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlanet(null);
  };

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(`https://swapi.dev/api/planets/`).then(
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
      <div className="planetsMianCont">
        <h2 className="planetsTitle">Planets</h2>
        <div className="planet-container">
          {planets.map((planet, index) => (
            <div
              key={index}
              className="planet"
              onClick={() => handleOpenModal(planet)}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="orbit"></div>
              <p>{planet.name}</p>
            </div>
          ))}
        </div>
      </div>
      <ModalPlanets
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedPlanet}
      />
    </div>
  );
};

export default Planets;
