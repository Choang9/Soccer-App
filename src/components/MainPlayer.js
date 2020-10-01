import React from "react";

const MainPlayer = (props) => {
    return (
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item">{props.playerName}</li>
            <li className="list-group-item">{props.playerPosition}</li>
            <li className="list-group-item">{props.playerNationality}</li>
        </ul>
    );
};

export default MainPlayer;