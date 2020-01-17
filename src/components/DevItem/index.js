import React from "react";

import "./style.css";

const DevItem = (props) => {
    const { dev,key } = props;

    return (
        <li key={key} className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(",")}</span>
                </div>
            </header>
            <p> {dev.bio} </p>
            <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no github
            </a>
        </li>
    )
}

export default DevItem;