import React from "react";

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.footystats.org/league-matches?key=example&season_id=2012";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ results: responseData.data });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div className="results">
        <ul className="list-group" id="gameweek">
          {this.state.results.map(match => (
            <li className="list-group-item" key={match.id}><b>Gameweek {match.game_week}</b></li>
          ))}
        </ul>
        <ul className="list-group" id="home-team">
          {this.state.results.map(match => (
            <li className="list-group-item" key={match.id}>{match.home_name}</li>
          ))}
        </ul>
        <ul className="list-group" id="score">
          {this.state.results.map(match => (
            <li className="list-group-item" key={match.id}>{match.homeGoalCount} - {match.awayGoalCount}</li>
          ))}
        </ul>
        <ul className="list-group" id="away-team">
          {this.state.results.map(match => (
            <li className="list-group-item" key={match.id}>{match.away_name}</li>
          ))}
        </ul>
        <ul className="list-group" id="stadium">
          {this.state.results.map(match => (
            <li className="list-group-item" key={match.id}>{match.stadium_name}</li>
          ))}
        </ul>
      </div>
    );
  };
}
export default Results;