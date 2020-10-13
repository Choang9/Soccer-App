import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main-header" id="top">
        <img src="./images/PremierLeague.png" alt="Premier League" className="main-image" />
        <h1 className="main-title">Premier League 2019/20 Data</h1>
      </div>
      <div className="alert alert-primary" role="alert">
        This is a demo project and has free tier API access with incomplete data.
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teams
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/arsenal/overview" className="nav-link">Arsenal</Link>
                <Link to="/astonvilla/overview" className="nav-link">Aston Villa</Link>
                <Link to="/bournemouth/overview" className="nav-link">Bournemouth</Link>
                <Link to="/brighton/overview" className="nav-link">Brighton</Link>
                <Link to="/burnley/overview" className="nav-link">Burnley</Link>
                <Link to="/chelsea/overview" className="nav-link">Chelsea</Link>
                <Link to="/crystalpalace/overview" className="nav-link">Crystal Palace</Link>
                <Link to="/everton/overview" className="nav-link">Everton</Link>
                <Link to="/leicester/overview" className="nav-link">Leicester</Link>
                <Link to="/liverpool/overview" className="nav-link">Liverpool</Link>
                <Link to="/mancity/overview" className="nav-link">Man City</Link>
                <Link to="/manutd/overview" className="nav-link">Man Utd</Link>
                <Link to="/newcastle/overview" className="nav-link">Newcastle</Link>
                <Link to="/norwich/overview" className="nav-link">Norwich</Link>
                <Link to="/sheffieldutd/overview" className="nav-link">Sheffield Utd</Link>
                <Link to="/southampton/overview" className="nav-link">Southampton</Link>
                <Link to="/tottenham/overview" className="nav-link">Tottenham</Link>
                <Link to="/watford/overview" className="nav-link">Watford</Link>
                <Link to="/westham/overview" className="nav-link">West Ham</Link>
                <Link to="/wolves/overview" className="nav-link">Wolves</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/players" className="nav-link">Players</Link>
            </li>
            <li class="nav-item">
              <Link to="/results" className="nav-link">Results</Link>
            </li>
            <li className="nav-item">
              <Link to="/standings" className="nav-link">Standings</Link>
            </li>
            {/* <li class="nav-item">
              <Link to="/seasonstats" className="nav-link">Season Stats</Link>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    </>
  );
}

export default Header;