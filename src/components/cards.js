import React, { Component } from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img src="{props.avatarURL}" width="100" />
      <div
        style={{
          display: "inline-block",
          marginLeft: 10
        }}
      >
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div>{props.location}</div>
      </div>
    </div>
  );
};

let data = [
  { name: "Heyman", 
    avatarURL: "", 
    location: "San Fran" },

  { name: "XVC", 
    avatarURL: "",
    location: "SF" }
];

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github username"/>
        <button type ="submit">Add Card</button>
      </form>
    );
  }
}

export class Cards extends Component {
  render() {
    return (
      <div className="Cards">
        <header className="App-header">Cards</header>
        <Form />
        <CardList cards={data}/>
      </div>
    );
  }
}

export default Cards;
