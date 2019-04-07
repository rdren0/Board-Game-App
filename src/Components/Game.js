import React, { Component } from 'react';
import '../css/Game.css'
function Game(props) {
  return (
    <div class = 'card'>
      <article>
        <img src={props.image} class ='gameCards' />
      </article>
    </div>
  )

}

export default Game;
