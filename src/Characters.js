import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setCharacters(result.results);
        // setLoading state to false once we have the results.results
        setLoading(false);
      })
      .catch((error) => {
        // Set the condition of what will happen in the event of an error below (using {})
        setError(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCharacters();
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Rick and Morty app</h2>
      {!loading ? (
        characters.map((character) => {
          return <Character character={character} />;
        })
      ) : (
        <p>.....loading</p>
      )}
      {/* If application encounter error, show the below */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
