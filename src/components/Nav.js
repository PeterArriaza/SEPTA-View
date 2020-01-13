import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="navContainer">
      <div id="navButtonContainer">
        <div className="navButton">
          <a href="/" className="buttonText">
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
