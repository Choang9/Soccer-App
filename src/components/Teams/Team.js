import React from "react";
import { Link } from "react-router-dom";

const Team = (props) => {
  return (
    <>
      <div className="team-header">
        <img src={props.image} className="team-image" />
        <h1 className="team-name">{props.team}</h1>
      </div>
      <nav class="navbar navbar-light bg-light">
        <Link to="/arsenal/players" class="navbar-brand">Players</Link>
        <Link to="/arsenal/fixtures" class="navbar-brand">Fixtures</Link>
        <a class="navbar-brand" href="#">Stats</a>
      </nav>
    </>
  );
};

export default Team;
