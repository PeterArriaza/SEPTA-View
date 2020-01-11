import React from "react";
import { connect } from "react-redux";
import "./styles/App.css";
import Nav from "./Nav";
import Card from "./Card";

function App(props) {
  console.log(props.transitData);
  const cards = props.transitData.map(item => (
    <li key={item.id}>
      <Card {...item} />
    </li>
  ));

  return (
    <div className="App">
      <Nav />
      <div id="cardList">
        <ul>{cards}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(App);
