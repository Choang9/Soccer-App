import React from 'react';
import TeamResults from './TeamResults';

class TeamResultsList extends React.Component {
    constructor() {
        super();
        this.state = {
            teamResultsList: []
        };
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.footystats.org/league-matches?key=example&season_id=2012";
        fetch(proxyurl + url)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ teamResultsList: responseData.data });
            })
            .catch(error => {
                console.log("Error fetching and parsing data", error);
            });
    }

    TeamPlayerList(props) {
        let results = [];

        for (let i = 0; i < this.state.teamResultsList.length; i++) {
            if (this.state.teamResultsList[i].homeID === props.teamId || this.state.teamResultsList[i].awayID === props.teamId) {
                results.push(this.state.teamResultsList[i]);
            };
        };

        let matches = results.map(match =>
            <TeamResults
                homeTeam={match.home_name}
                homeScore={match.homeGoalCount}
                awayScore={match.awayGoalCount}
                awayTeam={match.away_name}
            />
        )
    }

    render() {
        return (
            <div>
                {/* {matches} */}
            </div>
        );
    };
}
export default TeamResultsList;