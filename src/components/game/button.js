import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = props => {
  let button;
  switch (props.correct) {
    case true:
      button = (
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          yeet
        </button>
      );

      break;
    case false:
      button = <button className="btn btn-danger">nope</button>;

      break;
    default:
      button = (
        <button
          disabled={props.selectedNumbers.length === 0}
          onClick={props.checkAnswer}
        >
          =
        </button>
      );
      break;
  }
  return (
    <div className="col-2">
      {button}
      <br />
      <br />
      <button className="btn btn-warning" onClick={props.redraw} disabled={props.numOfRedraws === 0}>
        <FontAwesomeIcon icon="sync" /> {props.numOfRedraws}
      </button>
    </div>
  );
};

export default Button;
