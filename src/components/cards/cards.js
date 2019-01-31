import React, { Component } from "react";
import CardList from "./cardList";
import Form from "./form";

export class Cards extends Component {
  state = {
    cards: []
  };

  addNewCard = cardInfo => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="Cards">
        <header className="App-header">Cards</header>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default Cards;
