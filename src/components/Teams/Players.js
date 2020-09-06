import React from "react";

const Players = (props) => {
  return (
    <>
      <div className="team-header">
        <img src={props.image} className="team-image" />
        <h1 className="team-name">{props.team}</h1>
      </div>
      <h1>Players</h1>
    </>
  );
};

export default Players;

