import React, {Component} from 'react';
import App from '../App.js';
import NavBar from './NavBar.js'
import Game from './Game.js'
import Location from './Location.js'
import '../css/CardArea.css'

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    if (this.props.locationData) {
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
  // let locationCards =
  //    this.props.locationData.map((location) => {
  //     return <Location
  //     name={location.name}
  //     address = {location.address}
  //     website = {location.website}
  //     hasFood = {location.hasFood}
  //     hasDrinks = {location.hasDrinks}
  //     sellsGames = {location.sellsGames}
  //     weekdayOpen = {location.weekdayOpen}
  //     weekdayClose = {location.weekdayClose}
  //     weekendOpen = {location.weekendOpen}
  //     weekendClose = {location.weekendClose}
  //     googleMapsLink = {location.googleMapsLink}
  //     bringYourOwnGame = {location.bringYourOwnGame}
  //     gamesOffered = {location.gamesOffered}/>
    });
    return (
      <div>
        <NavBar NavBar={NavBar}/>
        <section className = 'cardContainer'>
          {gamesCards}
        </section>
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
