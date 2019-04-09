import React, {Component} from 'react';
// import App from '../App.js';
import NavBar from './NavBar.js'
import Game from './Game.js'
import Location from './Location.js'
import '../scss/CardArea.scss'


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

    let locationCards =
      this.props.locationData.map((location) => {
        return <Location
        name={location.name}
        address = {location.address}
        website = {location.website}
        hasFood = {location.hasFood}
        logo = {location.logo}
        hasDrinks = {location.hasDrinks}
        sellsGames = {location.sellsGames}
        weekdayOpen = {location.weekdayOpen}
        weekdayClose = {location.weekdayClose}
        weekendOpen = {location.weekendOpen}
        weekendClose = {location.weekendClose}
        googleMapsLink = {location.googleMapsLink}
        bringYourOwnGame = {location.bringYourOwnGame}
        gamesOffered = {location.gamesOffered}
        favorites={this.props.favorites}
        />

      });


    return (
      <div>
        <NavBar
        games={this.props.gamesData}
        playerFilter={this.props.playerFilter}
        weightFilter={this.props.weightFilter}
        gameTypeFilter={this.props.gameTypeFilter}
        foodFilter={this.props.foodFilter }
        drinkFilter={this.props.drinkFilter }
        sellerFilter={this.props.sellerFilter }
        bringGameFilter={this.props.bringGameFilter } />

        <section className="cardContainer">
          {locationCards}
          {gamesCards}
        </section>
      </div>
    )
  }
}

export default CardArea;
