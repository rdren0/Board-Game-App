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
      filteredLocations: [],
      searchInput: '',
      favorites : []
    }

    this.playerFilter = this.playerFilter.bind(this);
    this.weightFilter = this.weightFilter.bind(this);
    this.gameTypeFilter = this.gameTypeFilter.bind(this)
    this.foodFilter = this.foodFilter.bind(this);
    this.drinkFilter = this.drinkFilter.bind(this);
    this.sellerFilter = this.sellerFilter.bind(this);
    this.bringGameFilter = this.bringGameFilter.bind(this);
    this.filterFilteredCards = this.filterFilteredCards.bind(this);
    this.filterAllCards = this.filterAllCards.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.saveToStorage = this.saveToStorage.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.filterFavorites = this.filterFavorites.bind(this);
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
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.setState({
        favorites: favorites
      });
    }


  toggleFav(name) {
    let newState;
    if (this.state.favorites.includes(name)) {
      newState = this.state.favorites.filter(fav => fav !== name);
    } else {
      newState = [...this.state.favorites, name];
    }
    this.setState({
      favorites : newState
    }, () => {
      this.saveToStorage();
    });
  }

  searchByText(e) {
    let search = e.target.value.toLowerCase();
    let locationByText = this.state.locations.filter(location => {
      return location.name.toLowerCase().includes(search);
    });
    this.setState({
      filteredLocations: locationByText
    });
  }

  saveToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
  }

  filterAllCards(value, property) {
    let filterGames = this.state.games.filter(game => {
      return game[value] === property;
    });
    if (filterGames.length > 0) {
      this.setState({
        filteredGames: filterGames
      });    
    }
  }

  filterAllCardsByPlayers(property) {
    let filterGames = this.state.games.filter(game => {
      return game.minPlayers <= property && game.maxPlayers >= property;
    });
    if (filterGames.length === 0) {
      this.setState({ filteredGames: null })
    } else {
      this.setState({
        filteredGames: filterGames
      });
    }
  }


  filterAllCardsByType(value, property) {
    let filterGames = this.state.games.filter(game => {
      return game[value].includes(property);
    });
    if (filterGames.length > 0) {
      this.setState({
        filteredGames: filterGames
      });    
    }
  }

  filterFilteredCards(value, property) {
    let filterGames = this.state.filteredGames.filter(game => {
      return game[value] === property;
    });
    if (filterGames.length === 0) {
      this.setState({ filteredGames: null })
    } else {
      this.setState({
        filteredGames: filterGames
      });
    }
  }

  filterFilteredCardsByType(value, property) {
    let filterGames = this.state.filteredGames.filter(game => {
      return game[value].includes(property);
    })
    if (filterGames.length === 0) {
      this.setState({filteredGames: null});
    } else {
      this.setState({
        filteredGames: filterGames
      });
    }
  }

  playerFilter(numOfPlayers) {
    let playerInput = numOfPlayers;
    this.setState({
      players: playerInput
    });
    this.filterAllCardsByPlayers(playerInput)
}

  weightFilter(e){
    let weightInput = e.target.value.toLowerCase();
    this.setState({
      weight: weightInput
    });
    if(this.filteredGames !== undefined) {
      this.filterFilteredCards("weight",weightInput);
    } else {
      this.filterAllCards("weight", weightInput);
    }
  }

  gameTypeFilter(e) {
    let gameTypeInput = e.target.value.toLowerCase();
    this.setState({
      gameType: gameTypeInput
    });
    if (this.state.filteredGames.length > 0) {
      this.filterAllCardsByType("type",gameTypeInput)
    } else {
      this.filterFilteredCardsByType("type", gameTypeInput)
    }
  }

  foodFilter() {
    let filteredLocations = this.state.locations.filter(location => location.hasFood === true);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  drinkFilter() {
    let filteredLocations = this.state.locations.filter(location => location.hasDrinks === true);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  sellerFilter() {
    let filteredLocations = this.state.locations.filter(location => location.sellsGames === true);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  bringGameFilter() {
    let filteredLocations = this.state.locations.filter(location => location.bringYourOwnGame === true);
    this.setState({
      filteredLocations: filteredLocations
    });
  }

  filterFavorites() {
    let filteredLocations = [];
    let newLocation;
    this.state.favorites.forEach(fav => {
      newLocation = this.state.locations.find(location => {
        return location.name === fav
      });
      filteredLocations.push(newLocation);
    })
    this.setState({
      filteredLocations : filteredLocations
    });
  }


  render() {
    let cardArea = this.state.games.length ?
      <CardArea
        gamesData={ this.state.filteredGames }
        locationData={ this.state.filteredLocations }
        playerFilter={ this.playerFilter }
        weightFilter={ this.weightFilter }
        gameTypeFilter={ this.gameTypeFilter }
        foodFilter={ this.foodFilter }
        drinkFilter={ this.drinkFilter }
        sellerFilter={ this.sellerFilter }
        bringGameFilter={ this.bringGameFilter }
        favorites={ this.state.favorites }
        searchByText={ this.searchByText }
        toggleFav={ this.toggleFav }
        filterFavorites={ this.filterFavorites } 
        />
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
