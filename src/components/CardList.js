import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import "../styles/CardList.css";

function CardList(props) {
  const cards = props.transitData.map(item => (
    <li key={item.id}>
      <Card {...item} />
    </li>
  ));

  console.log(props.transitData);

  return (
    <div id="cardList">
      <ul>{cards}</ul>
      <Link className="buttonText" to="/add-route">
        <div className="routerButton blue">Add New Route</div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(CardList);
