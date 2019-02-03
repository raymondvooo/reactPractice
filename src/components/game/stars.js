import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./stars.css";

const Stars = props => {
  const numOfStars = Math.floor(Math.random()*9) + 1;
  let stars = []; 

  for (let i = 0; i < numOfStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon="star" />);
  }
  return <div className="col-5">{stars}</div>;
};

export default Stars;
