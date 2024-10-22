import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Home from "../src/screens/home";
import Characters from "../src/screens/characters";
import Planets from "../src/screens/planets";
import Starships from "../src/screens/starships";
import Vehicles from "../src/screens/vehicles";
import NoPageFound from "../src/screens/noPageFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
}

export default App;
