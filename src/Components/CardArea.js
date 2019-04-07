import React, {Component} from 'react';
import App from '../App.js';
import NavBar from './NavBar.js'
import Game from './Game.js'
import '../css/CardArea.css'

class CardArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let gamesCards =
     this.props.gamesData.map((game) => {
      return <Game
      name={game.name}
      minPlayers={game.minPlayers}
      maxPlayers={game.maxPlayers}
      weight={game.weight}
      timeToPlay={game.timeToPlay}
      type={game.type}
      features={game.features}
      image={game.image}
      id={game.gameId}
      />
    });
    return (
      <div>
        <NavBar 
        games={this.props.gamesData} 
        playerFilter={this.props.playerFilter} 
        weightFilter={this.props.weightFilter}
        gameTypeFilter={this.props.gameTypeFilter} />
        <div>
          {gamesCards}
        </div>
      </div>
    )
  }
}

export default CardArea;
