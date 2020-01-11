import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Nav from "./Nav";

function App(props) {
  console.log(props.transitData);
  // const cards = props.transitData.map(item => <li>{item.nickname}</li>);

  return (
    <div className="App">
      <Nav />
      {/* <View /> */}
      <div id="cardList">{/* <ul>{cards}</ul> */}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: state
});

export default connect(mapStateToProps)(App);
