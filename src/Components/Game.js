import React, { Component } from 'react';
import '../css/Game.css';

function Game(props) {
  return (
    <div>
      <article>
        <img src={props.image} />
      </article>
    </div>
  )

}

export default Game;
