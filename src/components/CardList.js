import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import "../styles/CardList.css";

function CardList(props) {
  const cards = props.transitData.map(item => (
    // <li >
    <Card key={item.id} {...item} />
    // </li>
  ));

  return (
    <div id="cardListContainer">
      {/* <ul> */}
      <div className="cardList">{cards}</div>
      {/* </ul> */}
      <Link className="buttonText" to="/add-route">
        <div className="routerButton blue">Add New Route</div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: state
  // transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(CardList);
