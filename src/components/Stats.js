import React from "react";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: []
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.footystats.org/league-season?key=example&season_id=2012";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ stats: responseData.data.top_scorers });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div className="results">
        <ul className="list-group" id="gameweek">
          {this.state.stats.map(stat => (
            <li className="list-group-item" key={stat.id}>{stat.known_as}</li>
          ))}
        </ul>
        {/* <ul className="list-group" id="home-team">
                    {this.state.results.map(stat => (
                        <li className="list-group-item" key={stat.id}>{stat.home_name}</li>
                    ))}
                </ul>
                <ul className="list-group" id="score">
                    {this.state.results.map(stat => (
                        <li className="list-group-item" key={stat.id}>{stat.homeGoalCount} - {stat.awayGoalCount}</li>
                    ))}
                </ul>
                <ul className="list-group" id="away-team">
                    {this.state.results.map(stat => (
                        <li className="list-group-item" key={stat.id}>{stat.away_name}</li>
                    ))}
                </ul>
                <ul className="list-group" id="stadium">
                    {this.state.results.map(stat => (
                        <li className="list-group-item" key={stat.id}>{stat.stadium_name}</li>
                    ))}
                </ul> */}
      </div>
    );
  };
}
export default Stats;