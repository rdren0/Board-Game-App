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
    let gamesCards = "loading";
  if(this.props.gamesData.length !== 0) {
    console.log(this.props.gamesData);
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


  }

    return (
      <div>
        <NavBar NavBar={NavBar}/>
        <div>
          {gamesCards}
        </div>
      </div>
    )
  }
}

export default CardArea;
