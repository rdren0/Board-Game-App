import React, { Component } from 'react';
import '../Game.css'
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
