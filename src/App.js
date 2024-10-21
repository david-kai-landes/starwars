import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../src/styles/App.css";
import logo from "../src/img/Star_Wars_Logo.png";
import Characters from "../src/screens/characters";
import Planets from "../src/screens/planets";
import Starships from "../src/screens/starships";
import Vehicles from "../src/screens/vehicles";

function Home() {
  return (
    <div className="App">
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
}

export default App;
