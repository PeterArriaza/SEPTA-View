import React from "react";
import { connect } from "react-redux";

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
    </div>
  );
}

const mapStateToProps = state => ({
  transitData: Object.keys(state).map(item => state[item])
});

export default connect(mapStateToProps)(CardList);
