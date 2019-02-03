import React from "react";
import "./numbers.css";

const Numbers = props => {
  const numArray = new Array(9);
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = i + 1;
    console.log(numArray);
  }
  const numberClassName = number => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };

  return (
    <div className="card text-center">
      <div>
        {numArray.map((number, i) => (
          <span key={i} className={numberClassName(number)} onClick={() => props.select(number)}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
