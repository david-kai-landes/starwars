import React, { useState, useEffect } from "react";
import "../styles/characters.css";

const Characters = () => {
  const [dataFetched, setDataFetched] = useState([]);
  // const [] = useState();

  let api = "https://swapi.dev/api/people/";

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
      <div>CHARACTERS</div>
    </div>
  );
};

export default Characters;
