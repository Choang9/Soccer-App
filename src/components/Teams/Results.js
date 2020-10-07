import React from "react";
import { Link } from "react-router-dom";

// To be done in the future
const Results = (props) => {
  return (
    <>
      <div className="team-header">
        <img src={props.image} className="team-image" alt={props.team} />
        <h1 className="team-name">{props.team}</h1>
      </div>
      <nav className="navbar navbar-light bg-light">
        <Link to={props.overviewUrl} className="navbar-brand">Overview</Link>
        <Link to={props.playersUrl} className="navbar-brand">Players</Link>
        <Link to={props.fixturesUrl} className="navbar-brand">Results</Link>
      </nav>
      <h1>Results</h1>
    </>
  );
};

export default Results;