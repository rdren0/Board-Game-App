import React, {Component} from 'react';
import App from '../App.js';
import NavBar from './NavBar.js'
import Game from './Game.js'
import '../css/CardArea.css'

class CardArea extends Component {
  constructor(props) {
    super(props);
  }

  // shuffle() {
  //   let shuffledGames = this.props.gamesData.sort(() => 0.5 - Math.random());
  //   let splicedGames =  shuffledGames.splice(0, 8);
  //   this.setState({
  //     displayGames: splicedGames
  //   })
  // }
  

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
        <NavBar NavBar={NavBar}/>
        <div>
          {gamesCards}
        </div>
      </div>
    )
  }
}

export default CardArea;
