import React from "react";
import "./styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <p className="cardTitle">{props.nickname}</p>
      <p>{props.line}</p>
      <p>
        <span className="underlineText">Arrive:</span>
        {props.arrive}
      </p>
      <p>
        <span className="underlineText">Status:</span>
        {props.status}
      </p>
      <p>
        <span className="underlineText">Time to Departure:</span>
        {props.timeToDeparture}
      </p>
    </div>
  );
}
