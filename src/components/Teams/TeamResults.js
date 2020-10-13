import React from 'react';

const TeamResults = (props) => {
  return (
    <div className="card player">
      <div className="card-body">
        <h5 className="card-title">{props.homeTeam}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.homeScore} - {props.awayScore}</h6>
        <p className="card-text">{props.awayTeam}</p>
      </div>
    </div>
  );
};

export default TeamResults;