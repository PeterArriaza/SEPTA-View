import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="navContainer">
      <Link className="buttonText" to="/">
        <div className="routerButton red">Log Out</div>
      </Link>
    </div>
  );
}
