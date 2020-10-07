import React from "react";
import { NavLink } from "react-router-dom";

const Overview = (props) => {
  return (
    <>
      <div className="team-header">
        <img src={props.image} className="team-image" alt={props.team} />
        <h1 className="team-name">{props.team}</h1>
      </div>
      <nav className="navbar navbar-light bg-light">
        <NavLink
          to={props.overviewUrl}
          className="navbar-brand"
          activeStyle={{
            textDecoration: "underline"
          }}>
          Overview
        </NavLink>
        <NavLink
          to={props.playersUrl}
          className="navbar-brand"
          activeStyle={{
            textDecoration: "underline"
          }}>
          Players
        </NavLink>
        {/* <NavLink to={props.resultsUrl} className="navbar-brand">Results</NavLink> */}
      </nav>
      <p className="team-desc">{props.desc}</p>
    </>
  );
};

export default Overview;
