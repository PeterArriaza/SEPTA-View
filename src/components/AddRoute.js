import React from "react";
import "../styles/AddRoute.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewCard } from "../actions";

import stopList from "../reducers/stops";

export class AddRoute extends React.Component {
  state = {
    stops: stopList,
    start: "",
    end: "",
    stopData: [],
    nickname: ""
  };

  // I think removeStart function assumes that user will fill out starting
  // location first.  List will not filter destination first.
  // Not sure what would happen if request sent to API with start/end the same stop
  removeStart = startStop => {
    const stops = [...stopList];
    const filteredList = stops.filter(stop => stop.props.value !== startStop);
    this.setState({ stops: filteredList });
  };

  handleStartChange = stop => {
    this.removeStart(stop);
    this.setState({ start: stop });
  };

  handleEndChange = stop => {
    this.setState({ end: stop });
  };

  addRoute = () => {
    const start = this.state.start;
    const end = this.state.end;
    // if ()const nickname = this.nickname.value.trim();
    // console.log(start, end, nickname);
    if (start === "" || end === "") {
      return console.log("error in form");
    }
    const startURI = encodeURIComponent(start.trim());
    const endURI = encodeURIComponent(end.trim());

    // so apparently I need to use a CORS proxy to access this septa endpoint...
    // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    const url = `https://www3.septa.org/hackathon/NextToArrive/${startURI}/${endURI}/3`;
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const cardUrl = proxy + url;
    // fetch(proxy + url)
    //   .then(res => res.json())
    //   .then(data => this.setState({ stopData: data }))
    //   .catch(err => console.log(err));
    this.props.dispatch(
      createNewCard(
        cardUrl,
        this.state.start,
        this.state.end,
        this.state.nickname
      )
    );
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="addRouteContainer">
        <h1>Add a New Route</h1>
        <div className="selectorContainer">
          <div className="stopForm">
            <label className="stopLabel">Start</label>
            <select
              value={this.state.startStop}
              onChange={e => this.handleStartChange(e.target.value)}
              // removeStart(e.target.value)}
              // ref={input => (this.startStop = input.target.value)}
            >
              {stopList}
            </select>
          </div>
          <div className="stopForm">
            <label className="stopLabel">Destination</label>
            <select
              value={this.state.startStop}
              onChange={e => this.handleEndChange(e.target.value)}
              // ref={input => (this.endStop = input)}
            >
              {this.state.stops}
            </select>
          </div>
          <div className="stopForm">
            <label className="nicknameLabel">Nickname (optional)</label>
            <input
              type="text"
              onChange={e => this.setState({ nickname: e.target.value })}
            ></input>
          </div>
          <div className="buttonRow">
            <Link className="cancel" to="/">
              <div className="cancelContainer">Cancel</div>
            </Link>
            <button className="addRouteButton" onClick={this.addRoute}>
              Add Route
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(AddRoute);
