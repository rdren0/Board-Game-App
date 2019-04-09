import React, { Component } from 'react';
import Header from './Components/Header.js';
// import NavBar from './Components/NavBar.js';
import CardArea from './Components/CardArea.js';
import './scss/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      games: [],
      filteredGames: [],
      filteredLocations: [],
      favorites: []
    }
    
    this.playerFilter = this.playerFilter.bind(this);
    this.foodFilter = this.foodFilter.bind(this);
    this.drinkFilter = this.drinkFilter.bind(this);
    this.sellerFilter = this.sellerFilter.bind(this);
    this.bringGameFilter = this.bringGameFilter.bind(this);
  }

  componentDidMount() {
    fetch("https://fe-apps.herokuapp.com/api/v1/whateverly/1901/kobesparrow/boardGames")
    .then(response => response.json())
    .then(gamesData => this.setState({games: gamesData.boardGames}))
    .catch(err => {
      throw new Error(err);
    })

    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/kobesparrow/localGameParlours')
      .then(response => response.json())
      .then(locations => {
        this.setState({
          locations: locations.localGameParlours
        })
      })
      .catch(err => {
        throw new Error(err);
      })

      const favorites = JSON.parse(localStorage.getItem('favorite')) || [];
      this.setState({
        favorites: favorites
      })
  }

  shuffle() {
    console.log('shuffle success')
    let shuffledGames = this.state.games.sort(() => 0.5 - Math.random());
    let splicedGames = shuffledGames.splice(0, 8);
    this.setState({
      filteredGames: splicedGames
    });
  }

  playerFilter(numOfPlayers) {
    let filteredGames = this.state.games.filter(game => game.minPlayers === numOfPlayers);
    this.setState({
      filteredGames: filteredGames
    });
  }

  weightFilter = (e) => {
    let weightOption = e.target.value.toLowerCase();
    let filteredGames = this.state.games.filter(game => game.weight === weightOption);
    this.setState({
      filteredGames: filteredGames
    });
  }

  gameTypeFilter = (e) => {
    let typeOption = e.target.value.toLowerCase();
    let filteredGames = this.state.games.filter(game => game.type === typeOption);
    this.setState({
      filteredGames: filteredGames
    });
  }

  foodFilter() {
    let filteredLocations = this.state.locations.filter(location => location.hasFood === true);
    console.log(filteredLocations);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  drinkFilter() {
    let filteredLocations = this.state.locations.filter(location => location.hasDrinks === true);
    console.log(filteredLocations);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  sellerFilter() {
    let filteredLocations = this.state.locations.filter(location => location.sellsGames === true);
    console.log(filteredLocations);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  bringGameFilter() {
    let filteredLocations = this.state.locations.filter(location => location.bringYourOwnGame === true);
    console.log(filteredLocations);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  render() {
    let cardArea = this.state.games.length ?
      <CardArea
        gamesData={this.state.filteredGames}
        locationData={this.state.filteredLocations}
        playerFilter={this.playerFilter}
        weightFilter={this.weightFilter}
        gameTypeFilter={this.gameTypeFilter}
        foodFilter={ this.foodFilter }
        drinkFilter={ this.drinkFilter }
        sellerFilter={ this.sellerFilter }
        bringGameFilter={ this.bringGameFilter}
        favorites= { this.state.favorites}/>
      : 'Loading...';

    return (
      <div className="App">
        <Header header={Header} />
        {cardArea}
      </div>
    );
  }
}

export default App;
