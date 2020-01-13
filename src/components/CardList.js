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

  return (
    <div id="cardList">
      <ul>{cards}</ul>
      <div className="buttonContainer">
        <div className="cancelButton">
          <Link className="buttonText" to="/add-route">
            Add New Route
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(CardList);
