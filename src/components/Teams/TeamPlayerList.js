import React from "react";
import { Link } from "react-router-dom";
import TeamPlayer from "./TeamPlayer";

const TeamPlayerList = (props) => {
  let results = [];

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].club_team_id === props.teamId) {
      results.push(props.data[i]);
    };
  };

  let players = results.map(player =>
    <TeamPlayer
      playerName={player.known_as}
      key={player.id}
      playerPosition={player.position}
      playerNationality={player.nationality}
      playerAppearances={player.appearances_overall}
      playerGoals={player.goals_overall}
      playerAssists={player.assists_overall}
      playerCleanSheets={player.clean_sheets_overall}
    />
  )

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
      <div className="player-list">
        {players}
      </div>
    </>
  );
};

export default TeamPlayerList;

