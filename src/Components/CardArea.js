import React, {Component} from 'react';
import App from '../App.js';
import NavBar from './NavBar.js'
import Game from './Game.js'

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    if (this.props.gamesData) {
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
        <NavBar NavBar={NavBar}/>
        <div>
          {gamesCards}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        {this.props.cardArea}
      </div>
      )
    }
  }
}

export default CardArea;
