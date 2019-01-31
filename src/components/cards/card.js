import React from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img src={props.avatar_url} width="100" alt="avatar" />
      <div
        style={{
          display: "inline-block",
          marginLeft: 10
        }}
      >
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          Name: {props.name}
        </div>
        <div>Username: {props.login}</div>
        <div>Location: {props.location}</div>
      </div>
    </div>
  );
};

export default Card;
