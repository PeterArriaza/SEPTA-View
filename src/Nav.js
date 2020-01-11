import React from "react";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <div id="navContainer">
      <div id="navButtonContainer">
        <div className="navButton">
          <a href="/" className="buttonText">
            User Action
          </a>
        </div>
        <div className="navButton">
          <a href="/" className="buttonText">
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
