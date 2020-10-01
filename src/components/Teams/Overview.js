import React from "react";
import { Link } from "react-router-dom";

const Overview = (props) => {
  return (
    <>
      <div className="team-header">
        <img src={props.image} className="team-image" alt={props.team} />
        <h1 className="team-name">{props.team}</h1>
      </div>
      <nav className="navbar navbar-light bg-light">
        <Link to={props.overviewUrl} className="navbar-brand">Overview</Link>
        <Link to={props.playersUrl} className="navbar-brand">Players</Link>
        <Link to={props.resultsUrl} className="navbar-brand">Results</Link>
      </nav>
      <h1>Overview</h1>
    </>
  );
};

export default Overview;