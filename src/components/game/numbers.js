import React from 'react';
import './numbers.css';

const Numbers = (props) => {
    const numArray = new Array(9);
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = i+1;
        console.log(numArray);
    }
    
  return (
    <div className="card text-center">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>

    </div>
    </div>
  );
}

export default Numbers;