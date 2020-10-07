import React from "react";
import MainPlayer from "./MainPlayer";

const MainPlayerList = (props) => {
  let results = props.data;
  let players = results.map(player =>
    <MainPlayer
      playerName={player.known_as}
      key={player.id}
      playerPosition={player.position}
      playerNationality={player.nationality}

    />
  )

  return (
    <>
      {/* <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <div className="blank-space"></div>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item"><b>Name</b></li>
        {/* <li className="list-group-item">Team</li> */}
        <li className="list-group-item"><b>Position</b></li>
        <li className="list-group-item"><b>Nationality</b></li>
      </ul>
      <div>{players}</div>
    </>
  )
}

export default MainPlayerList;