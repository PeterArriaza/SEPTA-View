import React from "react";
import "../styles/AddRoute.css";
import { Link } from "react-router-dom";

import stops from "../reducers/stops";

let stopList = [];

stops.map((stop, index) => {
  //   let lowercaseStop = stop.toLower();
  stopList[index] = <option value={stop}>{stop}</option>;
});

export default function AddRoute() {
  return (
    <div>
      <h1>Add a New Route</h1>
      <select>{stopList}</select>
      <Link className="cancel" to="/">
        Cancel
      </Link>
    </div>
  );
}
