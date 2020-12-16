import React from "react";

import Card from "./Card.js";

export default function Lists(props) {
  return (
    <section className="List" key={props.id}>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card, idx) => {
          return (
            <Card
              index={idx}
              id={card.id}
              title={card.title}
              content={card.content}
            />
          );
        })}
        <Card cards={props.cards} />
        <button>+ Add Random Card</button>
      </div>
    </section>
  );
}
