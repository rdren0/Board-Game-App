import React, { Component } from 'react';
import '../scss/Game.scss'

function Game(props) {
  return (
    <div className='gameCard' id={props.id}>
        <img src={props.image} className='gameCardImage' />
        <div className="additionalGameInfo">
          <p className="text">{props.name}</p>
          <p className="text">Players: {props.minPlayers}-{props.maxPlayers}</p>
          <p className="text">Weight: {props.weight}</p>
          <p className="text">Type: {props.type}</p>
          <p className="text">Favorite {props.unlike}</p>
        </div>
    </div>
  )
}

export default Game;
