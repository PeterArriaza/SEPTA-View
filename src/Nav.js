import React from "react";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <div id="navContainer">
      <div id="navButtonContainer">
        <div className="navButton">
          <p className="buttonText">User Action</p>
        </div>
        <div className="navButton">
          <p className="buttonText">Log Out</p>
        </div>
      </div>
    </div>
  );
}
