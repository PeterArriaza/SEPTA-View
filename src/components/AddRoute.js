import React from "react";
import "../styles/AddRoute.css";
import { Link } from "react-router-dom";

export default function AddRoute() {
  return (
    <div>
      <p>Add a New Route</p>
      <Link className="cancel" to="/">
        Cancel
      </Link>
    </div>
  );
}
