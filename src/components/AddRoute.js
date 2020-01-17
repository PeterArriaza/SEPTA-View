import React from "react";
import "../styles/AddRoute.css";
import { Link } from "react-router-dom";

import stopList from "../reducers/stops";

export default class AddRoute extends React.Component {
  state = {
    stops: stopList
  };

  removeStart = startStop => {
    const stops = [...stopList];
    const filteredList = stops.filter(stop => stop.props.value !== startStop);
    this.setState({ stops: filteredList });
  };

  render() {
    console.log(this.state.stops);
    return (
      <div>
        <h1>Add a New Route</h1>
        <div className="selectorContainer">
          <div className="stopSelector">
            <label>Start</label>
            <select
              id="startStop"
              onChange={e => this.removeStart(e.target.value)}
              // this.removeStart(e.target.value)}
            >
              {stopList}
            </select>
          </div>
          <div className="stopSelector">
            <label>Destination</label>
            <select
              id="startStop"
              ref={input => (this.startStop = input)}
              onChange={() => console.log("changed")}
            >
              {this.state.stops}
            </select>
          </div>
          <Link className="cancel" to="/">
            Cancel
          </Link>
        </div>
      </div>
    );
  }
}
