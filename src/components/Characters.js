import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";
import Grid2 from "@mui/material/Unstable_Grid2";
import Item2 from "@mui/material/Unstable_Grid2";
import Navbar from "./Navbar";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const fetchCharacters = () => {
    const url = `https://rickandmortyapi.com/api/character`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
        setCharacters(result.results);
        console.log("result.results>>", result.results);
        // setLoading state to false once we have the results.results
        setLoading(false);
      })
      .catch((error) => {
        // Set the condition of what will happen in the event of an error below (using {})
        setError(error.message);
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("Search value was changed");
    setTimeout(() => {
      fetchCharacters();
    }, 1000);
  }, []);

  const filteredSearchResults = () => {
    if (searchValue === "") {
      return characters;
    }
    let filteredResults = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log("filteredResults", filteredResults);
    return filteredResults;
  };
  console.log("filteredSearchResults", filteredSearchResults);
  const handleSetSearch = (searchValue) => {
    console.log("searchValue", searchValue);
    setSearchValue(searchValue);
  };
  // console.log({ searchValue });

  return (
    <div className="characters">
      {/* handleSetSearch here is a function that we are passing a prop top the child, in the child we call it when clicking on the button. And then we send the searchValue back to the parent */}
      <Navbar handleSetSearch={handleSetSearch} searchValue={searchValue} />
      <Grid2
        container
        rowSpacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {!loading && characters.length !== 0 ? (
          filteredSearchResults().map((character) => {
            //characters here if search for all

            return (
              <Item2 xs={6} sm={4} md={3} key={character.name}>
                {" "}
                <Character character={character} />
              </Item2>
            );
          })
        ) : (
          <p>.....loading</p>
        )}
        {/* If application encounter error, show the below */}
        {error && !loading && <p>{error}</p>}
      </Grid2>
    </div>
  );
}

export default Characters;

//for pagination, use dynamic variable in url, put the value in [] and then, skip filter function (keep handle search), and then filter over charcters
