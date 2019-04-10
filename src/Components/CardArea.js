import React, {Component} from 'react';
import NavBar from './NavBar.js'
import Game from './Game.js'
import Location from './Location.js'
import '../scss/CardArea.scss'


class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state ={
      view: "Games",
      favorites : []
    }
    this.changeCards = this.changeCards.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.saveToStorage = this.saveToStorage.bind(this);
  }

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({
      favorites: favorites
    })
  }

  changeCards(e){
    console.log(e.target.innerText);
    if(e.target.innerText === "Locations"){
      this.props.drinkFilter()
      this.setState({view: "Locations"}, function(){
      console.log(this.state);
    });
    } else{
      this.setState({view: "Games"}, function(){
    })};
  }

  toggleFav(name) {
  let newState;
  if (this.state.favorites.includes(name))  {
   newState = this.state.favorites.filter(fav => fav !== name)
 } else {
    newState = [...this.state.favorites, name]
  }
  this.setState({
    favorites : newState
  }, () => {
  this.saveToStorage()
  })
}

  saveToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
  }

  render() {
    if(this.state.view === "Games"){
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
              status = {this.state.view}
              changeCards = {this.changeCards}
              games={this.props.gamesData}
              playerFilter={this.props.playerFilter}
              weightFilter={this.props.weightFilter}
              gameTypeFilter={this.props.gameTypeFilter}
              foodFilter={ this.props.foodFilter }
              drinkFilter={this.props.drinkFilter }
              sellerFilter={ this.props.sellerFilter }
              bringGameFilter={ this.props.bringGameFilter } />
              <section className="cardContainer">
              {gamesCards}
              </section>
            </div>
          )
    } else {
    let locationCards =
      this.props.locationData.map((location) => {
        let liked;
        if (this.state.favorites.includes(location.name)) {
          liked = true;
        } else {
          liked = false;
        }
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
        isFavorite={liked}
        toggleFav={this.toggleFav}

        />
      });
        return (
          <div>
            <NavBar
            status = {this.state.view}
            changeCards = {this.changeCards}
            games={this.props.gamesData}
            playerFilter={this.props.playerFilter}
            weightFilter={this.props.weightFilter}
            gameTypeFilter={this.props.gameTypeFilter}
            foodFilter={ this.props.foodFilter }
            drinkFilter={this.props.drinkFilter }
            sellerFilter={ this.props.sellerFilter }
            bringGameFilter={ this.props.bringGameFilter }
            searchByText={this.props.searchByText} />
            <section className="locationCardContainer">
            {locationCards}
            </section>
          </div>
          )
    }
  }
}

export default CardArea;
