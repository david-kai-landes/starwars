import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import vehicles from "../img/Star_Wars_Vehicles.png";
import starship from "../img/starship.png";
import yoda from "../img/Star_Wars_Yoda.png";
import planets from "../img/planet.png";
import logo from "../img/Star_Wars_Logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="logoCont">
        <img src={logo} alt="logo" />
      </div>
      <div className="card-container">
        <Link to="/characters">
          <div className="card characters">
            <img src={yoda} alt="yoda" />
            <div className="textContaioner">
              <div>Characters</div>
              <div className="description">
                Explore the heroes and villains of the galaxy
              </div>
            </div>
          </div>
        </Link>
        <Link to="/planets">
          <div className="card planets">
            <img src={planets} alt="planets" />
            <div className="textContaioner">
              <div>Planets</div>
              <div className="description">
                Discover distant worlds and their mysteries
              </div>
            </div>
          </div>
        </Link>
        <Link className="link" to="/starships">
          <div className="card starships">
            <img src={starship} alt="starship" />
            <div className="textContaioner">
              <div>Starships</div>
              <div className="description">
                See the fastest ships in the galaxy
              </div>
            </div>
          </div>
        </Link>
        <Link className="link_vehicles" to="/vehicles">
          <div className="card vehicles">
            <img src={vehicles} alt="vehicles" />
            <div className="textContaioner">
              <div>Vehicles</div>
              <div className="description">
                Check out iconic vehicles like the AT-AT and speeders
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
