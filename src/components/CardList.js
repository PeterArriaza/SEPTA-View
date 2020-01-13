import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink
          className="buttonText"
          to="/add-route"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          <div className="cancelButton">Add New Route</div>
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(CardList);
