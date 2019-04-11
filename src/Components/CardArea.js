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
    }
    this.changeCards = this.changeCards.bind(this);
  }

  componentDidMount() {
    this.props.playerFilter(1);
  }

  changeCards(e){
    if(e.target.innerText === "Locations"){
      this.setState({view: "Locations"}, function(){
        this.props.drinkFilter()
    });
    } else{
      this.setState({view: "Games"}, function(){
    })};
  }

  render() {
    console.log('this.props.gamesData', this.props.gamesData)
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
        if (this.props.favorites.includes(location.name)) {
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
        toggleFav={this.props.toggleFav}

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
            searchByText={this.props.searchByText}
            filterFavorites={this.props.filterFavorites}
             />
            <section className="locationCardContainer">
            {locationCards}
            </section>
          </div>
          )
    }
  }
}

export default CardArea;
