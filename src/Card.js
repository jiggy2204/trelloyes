import React from "react";

export default function Card(props) {
  return (
    <div key={props.index} className="Card" id={props.id}>
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
