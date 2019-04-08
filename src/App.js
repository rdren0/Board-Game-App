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
      weight: null,
      players: null,
      gameType: null,
      filteredGames: [],
      filteredLocations: []
    }

    this.playerFilter = this.playerFilter.bind(this);
    this.foodFilter = this.foodFilter.bind(this);
    this.drinkFilter = this.drinkFilter.bind(this);
    this.sellerFilter = this.sellerFilter.bind(this);
    this.bringGameFilter = this.bringGameFilter.bind(this);
    this.filterCards = this.filterCards.bind(this);

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
  }

  shuffle() {
    console.log('shuffle success')
    let shuffledGames = this.state.games.sort(() => 0.5 - Math.random());
    let splicedGames = shuffledGames.splice(0, 8);
    this.setState({
      filteredGames: splicedGames
    });
  }

  filterCards() {
    let counter = 0;
    let filterGames = this.state.games.filter( game =>{
      if(this.state.players){
        return game.players === this.state.players
      }else{
        return game;}}).filter( game =>{
      if(this.state.weight){
        return game.weight === this.state.weight
      }else{
        return game;}}).filter( game =>{
      if(this.state.gameType){
        return game.gameType === this.state.gameType
      }else{
        return game;}}); 
    this.setState({
      filteredGames: filterGames
    });

  }

  playerFilter(numOfPlayers) {
    let playerInput = numOfPlayers;
    this.setState({
      players: playerInput
    });
    this.filterCards()
  }

  weightFilter = (e) => {
    console.log(e);
    let weightInput = e.target.value.toUpperCase();
    this.setState({
      weight: weightInput
    });
    this.filterCards()
  }

  gameTypeFilter = (e) => {
        console.log(e);

    let gameTypeInput = e.target.value.toUpperCase();
    this.setState({
      gameType: gameTypeInput
    });
    this.filterCards()

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
        bringGameFilter={ this.bringGameFilter } />
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
