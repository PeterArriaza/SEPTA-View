import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import logo from "../septa-view-logo.png";

export default function Nav() {
  return (
    <div id="navContainer">
      <img src={logo} alt="septa-view-logo"></img>
      {/* <Link className="buttonText" to="/">
        <div className="routerButton red">Log Out</div>
      </Link> */}
    </div>
  );
}
