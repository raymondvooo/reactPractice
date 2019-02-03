import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./stars.css";

const Stars = props => {
  
  let stars = []; 

  for (let i = 0; i < props.numOfStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon="star" />);
  }
  return <div className="col-5">{stars}</div>;
};

export default Stars;
