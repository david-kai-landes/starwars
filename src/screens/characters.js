import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/characters.css";
import logo from "../img/Star_Wars_Logo.png";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch("https://swapi.dev/api/people/").then(
          (response) => response.json()
        );
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching Characters/People:", error);
      }
    })();
  }, []);

  console.log("DATAAA == ", characters);

  return (
    <div className="character-screen terminal">
      <Link to="/">
        <div className="logoCont">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="charactersMainCont">
        <h2 className="charactersSubtitle">Characters</h2>
        <div className="character-highlight">
          {characters.map((character, index) => (
            <div key={index} className="character-card">
              <h3 className="character-name">{character.name}</h3>
              <div className="character-stats">
                <p>
                  <strong>Height:</strong> {character.height} cm
                </p>
                <p>
                  <strong>Mass:</strong> {character.mass} kg
                </p>
                <p>
                  <strong>Hair Color:</strong> {character.hair_color}
                </p>
                <p>
                  <strong>Skin Color:</strong> {character.skin_color}
                </p>
                <p>
                  <strong>Gender:</strong> {character.gender}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* particles */}
      {/* <p>Select a character to view their details...</p> */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
    </div>
  );
}

export default Characters;
