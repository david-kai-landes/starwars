import React, { useState, useEffect } from "react";
import "../styles/vehicles.css";

const Vehicles = () => {
  //
  const [dataFetched, setDataFetched] = useState([]);
  // const [] = useState();

  let api = "https://swapi.dev/api/vehicles/";

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
      <div>VEHICLES</div>
    </div>
  );
};

export default Vehicles;
