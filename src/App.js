import React, { Component } from 'react';
import Header from './Components/Header.js';
import NavBar from './Components/NavBar.js';
import CardArea from './Components/CardArea.js';
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      games:[]
    }

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

  render() {
    return (
      <div className="App">
        <Header header={Header}/>
          <CardArea
            gamesData={this.state.games}
            locationData={this.state.locations} />

      </div>
    );
  }
}

export default App;
