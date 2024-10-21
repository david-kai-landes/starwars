import React, { useState, useEffect } from "react";
import "../styles/planets.css";

const Planets = () => {
  const [dataFetched, setDataFetched] = useState([]);
  // const [] = useState();

  let api = "https://swapi.dev/api/planets/";

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(api).then((response) => response.json());
        setDataFetched(data);
      } catch (error) {
        console.error("Error Fetching Data From API", error);
      }
    })();
  }, [dataFetched]);

  console.log("DATA ==> ", dataFetched);

  return (
    <div className="characters">
      <div>PLANETS</div>
    </div>
  );
};

export default Planets;
