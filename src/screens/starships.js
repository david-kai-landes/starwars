import React, { useState, useEffect } from "react";
import "../styles/starships.css";

const Starships = () => {
  const [dataFetched, setDataFetched] = useState([]);
  // const [] = useState();

  let api = "https://swapi.dev/api/starships/";

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
      <div>STARSHIPS</div>
    </div>
  );
};

export default Starships;
