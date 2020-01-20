import React from "react";
import "../styles/AddRoute.css";
import { Link } from "react-router-dom";

import stopList from "../reducers/stops";

export default class AddRoute extends React.Component {
  state = {
    stops: stopList
  };

  // I think removeStart function assumes that user will fill out starting
  // location first.  List will not filter destination first.
  // Not sure what would happen if request sent to API with start/end the same stop
  removeStart = startStop => {
    const stops = [...stopList];
    const filteredList = stops.filter(stop => stop.props.value !== startStop);
    this.setState({ stops: filteredList });
  };

  render() {
    return (
      <div className="addRouteContainer">
        <h1>Add a New Route</h1>
        <div className="selectorContainer">
          <div className="stopSelector">
            <label className="stopLabel">Start</label>
            <select
              id="startStop"
              onChange={e => this.removeStart(e.target.value)}
            >
              {stopList}
            </select>
          </div>
          <div className="stopSelector">
            <label className="stopLabel">Destination</label>
            <select id="startStop" onChange={() => console.log("changed")}>
              {this.state.stops}
            </select>
          </div>
          <div className="buttonRow">
            <Link className="cancel" to="/">
              <div className="cancelContainer">Cancel</div>
            </Link>
            <div className="addRouteButton">Add Route</div>
          </div>
        </div>
      </div>
    );
  }
}
