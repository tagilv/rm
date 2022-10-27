import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";
import Grid2 from "@mui/material/Unstable_Grid2";
import Item2 from "@mui/material/Unstable_Grid2";

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
      <Grid2
        container
        rowSpacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {!loading ? (
          characters.map((character) => {
            return (
              <Item2 xs={6} sm={4} md={3}>
                {" "}
                <Character key={character.name} character={character} />
              </Item2>
            );
          })
        ) : (
          <p>.....loading</p>
        )}
        {/* If application encounter error, show the below */}
        {error && <p>{error}</p>}
      </Grid2>
    </div>
  );
}

export default Characters;
