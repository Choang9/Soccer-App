import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Overview from "./Teams/Overview";
import TeamPlayerList from "./Teams/TeamPlayerList";
import Results from "./Teams/Results";
import MainPlayerList from "./MainPlayerList";
import Standings from "./Standings";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.footystats.org/league-players?key=example&season_id=2012";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ players: responseData.data });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route
          path="/arsenal/overview"
          render={() => (
            <Overview
              image="../images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              resultsUrl="/arsenal/results"
            />
          )}
        />
        <Route
          path="/arsenal/players"
          render={() => (
            <TeamPlayerList
              image="../images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              resultsUrl="/arsenal/results"
              data={this.state.players}
              teamId={59}
            />
          )}
        />
        <Route
          path="/arsenal/results"
          render={() => (
            <Results
              image="../images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              resultsUrl="/arsenal/results"
            />
          )}
        />
        <Route
          path="/astonvilla/overview"
          render={() => (
            <Overview
              image="../images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              resultsUrl="/astonvilla/results"
            />
          )}
        />
        <Route
          path="/astonvilla/players"
          render={() => (
            <TeamPlayerList
              image="../images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              resultsUrl="/astonvilla/results"
              data={this.state.players}
              teamId={158}
            />
          )}
        />
        <Route
          path="/astonvilla/results"
          render={() => (
            <Results
              image="../images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              resultsUrl="/astonvilla/results"
            />
          )}
        />
        <Route
          path="/bournemouth/overview"
          render={() => (
            <Overview
              image="../images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              resultsUrl="/bournemouth/results"
            />
          )}
        />
        <Route
          path="/bournemouth/players"
          render={() => (
            <TeamPlayerList
              image="../images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              resultsUrl="/bournemouth/results"
              data={this.state.players}
              teamId={148}
            />
          )}
        />
        <Route
          path="/bournemouth/results"
          render={() => (
            <Results
              image="../images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              resultsUrl="/bournemouth/results"
            />
          )}
        />
        <Route
          path="/brighton/overview"
          render={() => (
            <Overview
              image="../images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              resultsUrl="/brighton/results"
            />
          )}
        />
        <Route
          path="/brighton/players"
          render={() => (
            <TeamPlayerList
              image="../images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              resultsUrl="/brighton/results"
              data={this.state.players}
              teamId={209}
            />
          )}
        />
        <Route
          path="/brighton/results"
          render={() => (
            <Results
              image="../images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              resultsUrl="/brighton/results"
            />
          )}
        />
        <Route
          path="/burnley/overview"
          render={() => (
            <Overview
              image="../images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              resultsUrl="/burnley/results"
            />
          )}
        />
        <Route
          path="/burnley/players"
          render={() => (
            <TeamPlayerList
              image="../images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              resultsUrl="/burnley/results"
              data={this.state.players}
              teamId={145}
            />
          )}
        />
        <Route
          path="/burnley/results"
          render={() => (
            <Results
              image="../images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              resultsUrl="/burnley/results"
            />
          )}
        />
        <Route
          path="/chelsea/overview"
          render={() => (
            <Overview
              image="../images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              resultsUrl="/chelsea/results"
            />
          )}
        />
        <Route
          path="/chelsea/players"
          render={() => (
            <TeamPlayerList
              image="../images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              resultsUrl="/chelsea/results"
              data={this.state.players}
              teamId={152}
            />
          )}
        />
        <Route
          path="/chelsea/results"
          render={() => (
            <Results
              image="../images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              resultsUrl="/chelsea/results"
            />
          )}
        />
        <Route
          path="/crystalpalace/overview"
          render={() => (
            <Overview
              image="../images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              resultsUrl="/crystalpalace/results"
            />
          )}
        />
        <Route
          path="/crystalpalace/players"
          render={() => (
            <TeamPlayerList
              image="../images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              resultsUrl="/crystalpalace/results"
              data={this.state.players}
              teamId={143}
            />
          )}
        />
        <Route
          path="/crystalpalace/results"
          render={() => (
            <Results
              image="../images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              resultsUrl="/crystalpalace/results"
            />
          )}
        />
        <Route
          path="/everton/overview"
          render={() => (
            <Overview
              image="../images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              resultsUrl="/everton/results"
            />
          )}
        />
        <Route
          path="/everton/players"
          render={() => (
            <TeamPlayerList
              image="../images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              resultsUrl="/everton/results"
              data={this.state.players}
              teamId={144}
            />
          )}
        />
        <Route
          path="/everton/results"
          render={() => (
            <Results
              image="../images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              resultsUrl="/everton/results"
            />
          )}
        />
        <Route
          path="/leicester/overview"
          render={() => (
            <Overview
              image="../images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              resultsUrl="/leicester/results"
            />
          )}
        />
        <Route
          path="/leicester/players"
          render={() => (
            <TeamPlayerList
              image="../images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              resultsUrl="/leicester/results"
              data={this.state.players}
              teamId={108}
            />
          )}
        />
        <Route
          path="/leicester/results"
          render={() => (
            <Results
              image="../images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              resultsUrl="/leicester/results"
            />
          )}
        />
        <Route
          path="/liverpool/overview"
          render={() => (
            <Overview
              image="../images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              resultsUrl="/liverpool/results"
            />
          )}
        />
        <Route
          path="/liverpool/players"
          render={() => (
            <TeamPlayerList
              image="../images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              resultsUrl="/liverpool/results"
              data={this.state.players}
              teamId={151}
            />
          )}
        />
        <Route
          path="/liverpool/results"
          render={() => (
            <Results
              image="../images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              resultsUrl="/liverpool/results"
            />
          )}
        />
        <Route
          path="/mancity/overview"
          render={() => (
            <Overview
              image="../images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              resultsUrl="/mancity/results"
            />
          )}
        />
        <Route
          path="/mancity/players"
          render={() => (
            <TeamPlayerList
              image="../images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              resultsUrl="/mancity/results"
              data={this.state.players}
              teamId={93}
            />
          )}
        />
        <Route
          path="/mancity/results"
          render={() => (
            <Results
              image="../images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              resultsUrl="/mancity/results"
            />
          )}
        />
        <Route
          path="/manutd/overview"
          render={() => (
            <Overview
              image="../images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              resultsUrl="/manutd/results"
            />
          )}
        />
        <Route
          path="/manutd/players"
          render={() => (
            <TeamPlayerList
              image="../images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              resultsUrl="/manutd/results"
              data={this.state.players}
              teamId={149}
            />
          )}
        />
        <Route
          path="/manutd/results"
          render={() => (
            <Results
              image="../images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              resultsUrl="/manutd/results"
            />
          )}
        />
        <Route
          path="/newcastle/overview"
          render={() => (
            <Overview
              image="../images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              resultsUrl="/newcastle/results"
            />
          )}
        />
        <Route
          path="/newcastle/players"
          render={() => (
            <TeamPlayerList
              image="../images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              resultsUrl="/newcastle/results"
              data={this.state.players}
              teamId={157}
            />
          )}
        />
        <Route
          path="/newcastle/results"
          render={() => (
            <Results
              image="../images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              resultsUrl="/newcastle/results"
            />
          )}
        />
        <Route
          path="/norwich/overview"
          render={() => (
            <Overview
              image="../images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              resultsUrl="/norwich/results"
            />
          )}
        />
        <Route
          path="/norwich/players"
          render={() => (
            <TeamPlayerList
              image="../images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              resultsUrl="/norwich/results"
              data={this.state.players}
              teamId={159}
            />
          )}
        />
        <Route
          path="/norwich/results"
          render={() => (
            <Results
              image="../images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              resultsUrl="/norwich/results"
            />
          )}
        />
        <Route
          path="/sheffieldutd/overview"
          render={() => (
            <Overview
              image="../images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              resultsUrl="/sheffieldutd/results"
            />
          )}
        />
        <Route
          path="/sheffieldutd/players"
          render={() => (
            <TeamPlayerList
              image="../images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              resultsUrl="/sheffieldutd/results"
              data={this.state.players}
              teamId={251}
            />
          )}
        />
        <Route
          path="/sheffieldutd/results"
          render={() => (
            <Results
              image="../images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              resultsUrl="/sheffieldutd/results"
            />
          )}
        />
        <Route
          path="/southampton/overview"
          render={() => (
            <Overview
              image="../images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              resultsUrl="/southampton/results"
            />
          )}
        />
        <Route
          path="/southampton/players"
          render={() => (
            <TeamPlayerList
              image="../images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              resultsUrl="/southampton/results"
              data={this.state.players}
              teamId={146}
            />
          )}
        />
        <Route
          path="/southampton/results"
          render={() => (
            <Results
              image="../images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              resultsUrl="/southampton/results"
            />
          )}
        />
        <Route
          path="/tottenham/overview"
          render={() => (
            <Overview
              image="../images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              resultsUrl="/tottenham/results"
            />
          )}
        />
        <Route
          path="/tottenham/players"
          render={() => (
            <TeamPlayerList
              image="../images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              resultsUrl="/tottenham/results"
              data={this.state.players}
              teamId={92}
            />
          )}
        />
        <Route
          path="/tottenham/results"
          render={() => (
            <Results
              image="../images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              resultsUrl="/tottenham/results"
            />
          )}
        />
        <Route
          path="/watford/overview"
          render={() => (
            <Overview
              image="../images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              resultsUrl="/watford/results"
            />
          )}
        />
        <Route
          path="/watford/players"
          render={() => (
            <TeamPlayerList
              image="../images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              resultsUrl="/watford/results"
              data={this.state.players}
              teamId={155}
            />
          )}
        />
        <Route
          path="/watford/results"
          render={() => (
            <Results
              image="../images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              resultsUrl="/watford/results"
            />
          )}
        />
        <Route
          path="/westham/overview"
          render={() => (
            <Overview
              image="../images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              resultsUrl="/westham/results"
            />
          )}
        />
        <Route
          path="/westham/players"
          render={() => (
            <TeamPlayerList
              image="../images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              resultsUrl="/westham/results"
              data={this.state.players}
              teamId={153}
            />
          )}
        />
        <Route
          path="/westham/results"
          render={() => (
            <Results
              image="../images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              resultsUrl="/westham/results"
            />
          )}
        />
        <Route
          path="/wolves/overview"
          render={() => (
            <Overview
              image="../images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              resultsUrl="/wolves/results"
            />
          )}
        />
        <Route
          path="/wolves/players"
          render={() => (
            <TeamPlayerList
              image="../images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              resultsUrl="/wolves/results"
              data={this.state.players}
              teamId={223}
            />
          )}
        />
        <Route
          path="/wolves/results"
          render={() => (
            <Results
              image="../images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              resultsUrl="/wolves/results"
            />
          )}
        />
        <Route
          path="/players"
          render={() => (
            <MainPlayerList
              data={this.state.players}
            />
          )}
        />
        <Route
          path="/standings"
          component={Standings}
        />
      </BrowserRouter >
    );
  }
}

export default App;