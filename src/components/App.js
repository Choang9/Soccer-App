import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Overview from "./Teams/Overview";
import TeamPlayerList from "./Teams/TeamPlayerList";
import TeamResultsList from "./Teams/TeamResultsList";
import MainPlayerList from "./MainPlayerList";
import Standings from "./Standings";
import Results from "./Results";
import Stats from "./Stats";


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
              image="../Soccer-App/images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              desc="As one of the most successful and beloved clubs in England, Arsenal Football Club was always a magnet for the public. Tradition-wise, their results speak for themselves; in addition to winning 28 major domestic trophies, Arsenal hold the records for longest unbeaten streak and longest run in top flight of English football."
            // resultsUrl="/arsenal/results"
            />
          )}
        />
        <Route
          path="/arsenal/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              // resultsUrl="/arsenal/results"
              data={this.state.players}
              teamId={59}
            />
          )}
        />
        <Route
          path="/arsenal/results"
          render={() => (
            <TeamResultsList
              image="../Soccer-App/images/Arsenal.svg"
              team="Arsenal"
              overviewUrl="/arsenal/overview"
              playersUrl="/arsenal/players"
              resultsUrl="/arsenal/results"
              teamId={59}
            />
          )}
        />
        <Route
          path="/astonvilla/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              desc="If we're talking about historical relevance, there are not many clubs in the world that can compete with Aston Villa. In addition to being one of the oldest football clubs in Britain, Villa are the originators of the Football League – the top flight in the country until the Premier League was formed in 1992. In its early history, Villa was one of the most consistent sides in English football, winning several First Division, FA Cup and League Cup titles. They are also one of only five English clubs to have won the European Cup/Champions League title."
            // resultsUrl="/astonvilla/results"
            />
          )}
        />
        <Route
          path="/astonvilla/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              // resultsUrl="/astonvilla/results"
              data={this.state.players}
              teamId={158}
            />
          )}
        />
        {/* <Route
          path="/astonvilla/results"
          render={() => (
            <Results
              image="../Soccer-App/images/AstonVilla.svg"
              team="Aston Villa"
              overviewUrl="/astonvilla/overview"
              playersUrl="/astonvilla/players"
              // resultsUrl="/astonvilla/results"
            />
          )}
        /> */}
        <Route
          path="/bournemouth/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              desc="Without any big titles, AFC Bournemouth has played in the English professional football league since 1923. They managed to get promoted to Premier League in 2015."
            // resultsUrl="/bournemouth/results"
            />
          )}
        />
        <Route
          path="/bournemouth/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              // resultsUrl="/bournemouth/results"
              data={this.state.players}
              teamId={148}
            />
          )}
        />
        {/* <Route
          path="/bournemouth/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Bournemouth.svg"
              team="Bournemouth"
              overviewUrl="/bournemouth/overview"
              playersUrl="/bournemouth/players"
              // resultsUrl="/bournemouth/results"
            />
          )}
        /> */}
        <Route
          path="/brighton/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              desc="English football club Brighton & Hove Albion became a member of the Football League in 1920. A 13th place in Division 1 in 1982 is so far the best result. They reached the FA Cup final in 1983 and lost against Manchester United."
            // resultsUrl="/brighton/results"
            />
          )}
        />
        <Route
          path="/brighton/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              // resultsUrl="/brighton/results"
              data={this.state.players}
              teamId={209}
            />
          )}
        />
        {/* <Route
          path="/brighton/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Brighton.svg"
              team="Brighton"
              overviewUrl="/brighton/overview"
              playersUrl="/brighton/players"
              // resultsUrl="/brighton/results"
            />
          )}
        /> */}
        <Route
          path="/burnley/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              desc="Burnley Football Club has been a member of the Football League since its foundation in 1888. Over the years the club has won two league titles (1921 and 1960) plus the FA Cup title once (1914). Some of the biggest profiles in the history of the club are Jerry Dawson, Tom Boyle, Bob Kelly, Jimmy Adamson, Jimmy Mcllroy and John Connelly."
            // resultsUrl="/burnley/results"
            />
          )}
        />
        <Route
          path="/burnley/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              // resultsUrl="/burnley/results"
              data={this.state.players}
              teamId={145}
            />
          )}
        />
        {/* <Route
          path="/burnley/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Burnley.svg"
              team="Burnley"
              overviewUrl="/burnley/overview"
              playersUrl="/burnley/players"
              // resultsUrl="/burnley/results"
            />
          )}
        /> */}
        <Route
          path="/chelsea/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              desc="While Chelsea were a reasonably consistent club for most of their history, people nowadays usually associate them with the football juggernaut they've become at the turn of the century; not much of a surprise, considering the club won the majority of their silverware in that period. Chelsea have won League titles, FA Cups and League Cups. They've also found success in Europe, becoming the only British club to win all three major UEFA trophies: the Cup Winners' Cup, the Champions League and the Europa League."
            // resultsUrl="/chelsea/results"
            />
          )}
        />
        <Route
          path="/chelsea/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              // resultsUrl="/chelsea/results"
              data={this.state.players}
              teamId={152}
            />
          )}
        />
        {/* <Route
          path="/chelsea/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Chelsea.svg"
              team="Chelsea"
              overviewUrl="/chelsea/overview"
              playersUrl="/chelsea/players"
              // resultsUrl="/chelsea/results"
            />
          )}
        /> */}
        <Route
          path="/crystalpalace/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              desc="Crystal Palace FC become a member of the Football League in 1920, after 15 years in the Southern League. They reached the Division One for the first time in 1969 and the best position was achieved in 1991 with a third place. They have reached the FA Cup final two times without winning it. In the 2000s the club was going through a lot of economical struggles and several owner shifts have occurred."
            // resultsUrl="/crystalpalace/results"
            />
          )}
        />
        <Route
          path="/crystalpalace/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              // resultsUrl="/crystalpalace/results"
              data={this.state.players}
              teamId={143}
            />
          )}
        />
        {/* <Route
          path="/crystalpalace/results"
          render={() => (
            <Results
              image="../Soccer-App/images/CrystalPalace.svg"
              team="Crystal Palace"
              overviewUrl="/crystalpalace/overview"
              playersUrl="/crystalpalace/players"
              // resultsUrl="/crystalpalace/results"
            />
          )}
        /> */}
        <Route
          path="/everton/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              desc="Even for a club based in the 'Cradle of Football', Everton's history is startling. In their 138 years of existence, they have spent only four years outside the top flight of English football. During this time, they have won nine League titles, five FA Cups and the 1985 Cup Winners' Cup. Since 1892, the club has been playing its home games at Goodison Park, the first major football stadium in England."
            // resultsUrl="/everton/results"
            />
          )}
        />
        <Route
          path="/everton/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              // resultsUrl="/everton/results"
              data={this.state.players}
              teamId={144}
            />
          )}
        />
        {/* <Route
          path="/everton/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Everton.svg"
              team="Everton"
              overviewUrl="/everton/overview"
              playersUrl="/everton/players"
              // resultsUrl="/everton/results"
            />
          )}
        /> */}
        <Route
          path="/leicester/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              desc="While Leicester City does not have as colorful a history as some of their Midlands rivals, the club can boast of spending only a single season outside the top two divisions of English football. They have won several Second Division titles and three League Cups, and being responsible for finishing first in the Premier League against all odds in 2016. Leicester is known for their long-standing rivalry with Nottingham Forest, a feature usually referred to as the East Midlands derby. In the club's past, two of England’s most legendary goalkeepers, Gordon Banks and Peter Shilton, have been protecting the net."
            // resultsUrl="/leicester/results"
            />
          )}
        />
        <Route
          path="/leicester/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              // resultsUrl="/leicester/results"
              data={this.state.players}
              teamId={108}
            />
          )}
        />
        {/* <Route
          path="/leicester/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Leicester.svg"
              team="Leicester"
              overviewUrl="/leicester/overview"
              playersUrl="/leicester/players"
              // resultsUrl="/leicester/results"
            />
          )}
        /> */}
        <Route
          path="/liverpool/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              desc="Since they were founded in 1892, the Liverpool Football Club name was synonymous with fame and glory. Internationally, Liverpool is the most successful British club of all time with plenty of European trophies on their record. They are one of the most popular football teams in the world, with over 200 supporter clubs in at least 50 different countries. And yet, their magnificent history will forever be plagued by two of the worst stadium disasters of all time: Heysel and Hillsborough."
            // resultsUrl="/liverpool/results"
            />
          )}
        />
        <Route
          path="/liverpool/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              // resultsUrl="/liverpool/results"
              data={this.state.players}
              teamId={151}
            />
          )}
        />
        {/* <Route
          path="/liverpool/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Liverpool.svg"
              team="Liverpool"
              overviewUrl="/liverpool/overview"
              playersUrl="/liverpool/players"
              // resultsUrl="/liverpool/results"
            />
          )}
        /> */}
        <Route
          path="/mancity/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              desc="Much like their Mancunian rivals, Manchester City have seen many highs during their colorful existence. With First Division/Premier League titles, FA Cups, League Cups and one Cup Winners' Cup, City stand tall as one of the most successful English football clubs of all time. Still, their history contains more than enough lows to even it up; for example, City are still the only English champions to be relegated the very next season."
            // resultsUrl="/mancity/results"
            />
          )}
        />
        <Route
          path="/mancity/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              // resultsUrl="/mancity/results"
              data={this.state.players}
              teamId={93}
            />
          )}
        />
        {/* <Route
          path="/mancity/results"
          render={() => (
            <Results
              image="../Soccer-App/images/ManCity.svg"
              team="Man City"
              overviewUrl="/mancity/overview"
              playersUrl="/mancity/players"
              // resultsUrl="/mancity/results"
            />
          )}
        /> */}
        <Route
          path="/manutd/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              desc="Manchester United is one of the most prestigious football clubs and has always maintained a distinguished tradition, a record of consistent success, and a great history. They are together with Liverpool, England's most successful football clubs ever. 'The Red Devils' have more national titles than Liverpool, but the rival has collected more titles in international tournaments."
            // resultsUrl="/manutd/results"
            />
          )}
        />
        <Route
          path="/manutd/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              // resultsUrl="/manutd/results"
              data={this.state.players}
              teamId={149}
            />
          )}
        />
        {/* <Route
          path="/manutd/results"
          render={() => (
            <Results
              image="../Soccer-App/images/ManUtd.svg"
              team="Man Utd"
              overviewUrl="/manutd/overview"
              playersUrl="/manutd/players"
              // resultsUrl="/manutd/results"
            />
          )}
        /> */}
        <Route
          path="/newcastle/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              desc="If you like clubs with tradition, Newcastle United has it in spades. Since their foundation in 1892, they have won four League titles and six FA Cups, which makes them one of the most successful English club of all time. In addition to that, they have spent an impressive numbers of seasons in the top-flight. Their long-standing rivalry with Sunderland, colloquially known as the Tyne-Wear derby, is one of the fiercest local derbies in English football."
            // resultsUrl="/newcastle/results"
            />
          )}
        />
        <Route
          path="/newcastle/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              // resultsUrl="/newcastle/results"
              data={this.state.players}
              teamId={157}
            />
          )}
        />
        {/* <Route
          path="/newcastle/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Newcastle.svg"
              team="Newcastle"
              overviewUrl="/newcastle/overview"
              playersUrl="/newcastle/players"
              // resultsUrl="/newcastle/results"
            />
          )}
        /> */}
        <Route
          path="/norwich/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              desc="Norwich City FC is a three time FA Cup semi-finalists and have won the Football League Cup two times (1962 and 1985). Among the most prominent players that have played in the club Ron Ashman, Graham Paddon, David Cross and Martin Peters could be mentioned. The club has also the famous nickname The Canaries Yellows."
            // resultsUrl="/norwich/results"
            />
          )}
        />
        <Route
          path="/norwich/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              // resultsUrl="/norwich/results"
              data={this.state.players}
              teamId={159}
            />
          )}
        />
        {/* <Route
          path="/norwich/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Norwich.svg"
              team="Norwich"
              overviewUrl="/norwich/overview"
              playersUrl="/norwich/players"
              // resultsUrl="/norwich/results"
            />
          )}
        /> */}
        <Route
          path="/sheffieldutd/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              desc="The second established football club in Sheffield, Sheffield United FC, was the first English football club with “United” in its name. The reason for the name was that many parts joined to form a club. They have won the British top league once and the FA Cup four times."
            // resultsUrl="/sheffieldutd/results"
            />
          )}
        />
        <Route
          path="/sheffieldutd/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              // resultsUrl="/sheffieldutd/results"
              data={this.state.players}
              teamId={251}
            />
          )}
        />
        {/* <Route
          path="/sheffieldutd/results"
          render={() => (
            <Results
              image="../Soccer-App/images/SheffieldUtd.svg"
              team="Sheffield Utd"
              overviewUrl="/sheffieldutd/overview"
              playersUrl="/sheffieldutd/players"
              // resultsUrl="/sheffieldutd/results"
            />
          )}
        /> */}
        <Route
          path="/southampton/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              desc="Considering they have spent the majority of their recent history in the top-flight, it might be a little surprising that Southampton Football Club only have a single major honor to their name – the 1976 FA Cup. Nonetheless, their colorful tradition and the number of great players who wore their shirts make Southampton a household name of English football. The club's youth academy is renowned for consistently producing top talent and affording them the maximum opportunity for growth."
            // resultsUrl="/southampton/results"
            />
          )}
        />
        <Route
          path="/southampton/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              // resultsUrl="/southampton/results"
              data={this.state.players}
              teamId={146}
            />
          )}
        />
        {/* <Route
          path="/southampton/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Southampton.svg"
              team="Southampton"
              overviewUrl="/southampton/overview"
              playersUrl="/southampton/players"
              // resultsUrl="/southampton/results"
            />
          )}
        /> */}
        <Route
          path="/tottenham/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              desc="During their colorful lifespan, Tottenham Hotspur were mostly known as cup specialists. They made history by becoming the first British team to win a European trophy, as well as winning the first UEFA Cup ever organized. Overall, their trophy room contains eight FA Cups, four League Cups, one Cup Winners' Cup and two UEFA Cups. In addition to their long tradition of cup success, the 'Spurs' can also boast with two League titles in 1951 and 1961."
            // resultsUrl="/tottenham/results"
            />
          )}
        />
        <Route
          path="/tottenham/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              // resultsUrl="/tottenham/results"
              data={this.state.players}
              teamId={92}
            />
          )}
        />
        {/* <Route
          path="/tottenham/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Tottenham.svg"
              team="Tottenham"
              overviewUrl="/tottenham/overview"
              playersUrl="/tottenham/players"
              // resultsUrl="/tottenham/results"
            />
          )}
        /> */}
        <Route
          path="/watford/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              desc="Watford Football Club played in the Southern league from 1896 to 1920 before becoming a member of the Football League. They didn’t reach the first division until 1982 for the first time. The best accomplished result in the top league is a second place in 1983. In the FA Cup, they have as best been runner-up (1984 and 2019)."
            // resultsUrl="/watford/results"
            />
          )}
        />
        <Route
          path="/watford/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              // resultsUrl="/watford/results"
              data={this.state.players}
              teamId={155}
            />
          )}
        />
        {/* <Route
          path="/watford/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Watford.svg"
              team="Watford"
              overviewUrl="/watford/overview"
              playersUrl="/watford/players"
              // resultsUrl="/watford/results"
            />
          )}
        /> */}
        <Route
          path="/westham/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              desc="With their attractive style of play, claret and blue jerseys and a catchy anthem, West Ham United are certainly a unique beast in the football world. They have a reputation of cup specialists – in addition to winning a Cup Winners' Cup in 1965, they have also claimed three FA Cup trophies. Since the early 50s, the club has been known as 'The Academy of Football', with many young and talented players coming through their ranks."
            // resultsUrl="/westham/results"
            />
          )}
        />
        <Route
          path="/westham/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              // resultsUrl="/westham/results"
              data={this.state.players}
              teamId={153}
            />
          )}
        />
        {/* <Route
          path="/westham/results"
          render={() => (
            <Results
              image="../Soccer-App/images/WestHam.svg"
              team="West Ham"
              overviewUrl="/westham/overview"
              playersUrl="/westham/players"
              // resultsUrl="/westham/results"
            />
          )}
        /> */}
        <Route
          path="/wolves/overview"
          render={() => (
            <Overview
              image="../Soccer-App/images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              desc="Wolverhampton Wanderers FC has won the top British league three times: 1954, 1958 and 1959. They have also won the FA Cup four times and the Football League Cup two times. They reach the UEFA Cup final in 1972. Two of the most prominent players are Billy Wright and Bill Slater."
            // resultsUrl="/wolves/results"
            />
          )}
        />
        <Route
          path="/wolves/players"
          render={() => (
            <TeamPlayerList
              image="../Soccer-App/images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              // resultsUrl="/wolves/results"
              data={this.state.players}
              teamId={223}
            />
          )}
        />
        {/* <Route
          path="/wolves/results"
          render={() => (
            <Results
              image="../Soccer-App/images/Wolves.svg"
              team="Wolves"
              overviewUrl="/wolves/overview"
              playersUrl="/wolves/players"
              // resultsUrl="/wolves/results"
            />
          )}
        /> */}
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
        <Route
          path="/stats"
          component={Stats}
        />
        <Route
          path="/results"
          component={Results}
        />
        <Footer />
      </BrowserRouter >
    );
  }
}

export default App;