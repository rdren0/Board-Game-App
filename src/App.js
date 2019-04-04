import React, { Component } from 'react';
// import localGameParlours from './data-set.js'
// import boardGames from './data-set.js'
import Header from './Components/Header.js'
import NavBar from './Components/NavBar.js'
import CardArea from './Components/CardArea.js'
import './css/App.css';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Header header={Header}/>
        <NavBar NavBar={NavBar}/>
      </div>
    );
  }
}

export default App;
