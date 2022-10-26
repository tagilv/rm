import React from "react";

function Character({ character }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <p>{character.name}</p>
    </div>
  );
}

export default Character;
