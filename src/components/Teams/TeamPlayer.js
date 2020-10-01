import React from 'react';

const TeamPlayer = (props) => {
  return (
    <div className="card" id="player">
      <div className="card-body">
        <h5 className="card-title">{props.playerName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.playerPosition}</h6>
        <p className="card-text">Nationality: {props.playerNationality}</p>
        <p className="card-text">Appearances: {props.playerAppearances}</p>
        <p className="card-text">Goals: {props.playerGoals}</p>
        <p className="card-text">Assists: {props.playerAssists}</p>
        <p className="card-text">Clean Sheets: {props.playerCleanSheets}</p>
      </div>
    </div>
  );
};

export default TeamPlayer;