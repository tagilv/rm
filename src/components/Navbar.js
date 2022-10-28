import React from "react";
import style from "./style/style.css";

function Navbar({ handleSetSearch }) {
  return (
    <div className="nav">
      <input
        type="text"
        onChange={(e) => handleSetSearch(e.target.value)}
        defaultValue="Search character"
      />
    </div>
  );
}

export default Navbar;
