import React from 'react';

class Standings extends React.Component {
  constructor() {
    super();
    this.state = {
      standings: []
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.footystats.org/league-tables?key=example&season_id=2012";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ standings: responseData.data.league_table });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div className="standings">
        <ul className="list-group" id="position">
          <li className="list-group-item">Position</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.position}</li>
          ))}
        </ul>
        <ul className="list-group" id="team">
          <li className="list-group-item">Team</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.cleanName}</li>
          ))}
        </ul>
        <ul className="list-group" id="matches">
          <li className="list-group-item">Matches</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.matchesPlayed}</li>
          ))}
        </ul>
        <ul className="list-group" id="wins">
          <li className="list-group-item">Wins</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonWins_home + team.seasonWins_away}</li>
          ))}
        </ul>
        <ul className="list-group" id="draws">
          <li className="list-group-item">Draws</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonDraws_home + team.seasonDraws_away}</li>
          ))}
        </ul>
        <ul className="list-group" id="losses">
          <li className="list-group-item">Losses</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonLosses_home + team.seasonLosses_away}</li>
          ))}
        </ul>
        <ul className="list-group" id="gf">
          <li className="list-group-item">GF</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonGoals}</li>
          ))}
        </ul>
        <ul className="list-group" id="ga">
          <li className="list-group-item">GA</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonConceded_home + team.seasonConceded_away}</li>
          ))}
        </ul>
        <ul className="list-group" id="gd">
          <li className="list-group-item">GD</li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}>{team.seasonGoalDifference}</li>
          ))}
        </ul>
        <ul className="list-group" id="points">
          <li className="list-group-item"><b>Points</b></li>
          {this.state.standings.map(team => (
            <li className="list-group-item" key={team.id}><b>{team.points}</b></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Standings;