import React, {Component} from 'react';
import App from '../App.js';
import '../scss/NavBar.scss'
import onePlayer from '../images/One-Player.svg'
import twoPlayers from '../images/Two-Players.svg'
import threePlayers from '../images/Three-Players.svg'
import fourPlayers from '../images/Four-Players.svg'
import fivePlayers from '../images/Five-Players.svg'
import groupPlayers from '../images/Group-Players.svg'
import search from '../images/Search.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.status)
    if(this.props.status === "Locations"){
      return (
        <div>
      <nav>
        <ul>
          <li><button onClick={() => this.props.foodFilter()}>Has Food</button></li>
          <li><button onClick={() => this.props.drinkFilter()}>Has Drinks</button></li>
          <li><button onClick={() => this.props.sellerFilter()}>Sells Games</button></li>
          <li><button onClick={() => this.props.bringGameFilter()}>Bring Your Own Game</button></li>
        </ul>
        <section>
          <input type="text" placeholder="Search by Location" onChange={this.props.searchLowerCase}/>
          <button onClick={this.props.searchByText}><img src={search}/></button>
        </section>
        <button onClick={this.props.changeCards}>Games</button>
      </nav>
      </div>
      )
    }else{
      return (
        <div>
        <nav>
          <ul>
            <li><button onClick={() => this.props.playerFilter(1)}><img src={onePlayer} alt="One Player Games" /></button></li>
            <li><button onClick={() => this.props.playerFilter(2)}><img src={twoPlayers} alt="Two Player Games"/></button></li>
            <li><button onClick={() => this.props.playerFilter(3)}><img src={threePlayers} alt="Three Player Games" /></button></li>
            <li><button onClick={() => this.props.playerFilter(4)}><img src={fourPlayers} alt="Four Player Games" /></button></li>
            <li><button onClick={() => this.props.playerFilter(5)}><img src={fivePlayers} alt="Five Player Games" /></button></li>
            <li><button onClick={() => this.props.playerFilter(6)}><img src={groupPlayers} alt="Group Player Games" /></button></li>
          </ul>
          <select onChange={this.props.weightFilter}>
            <option>Weight </option>
            <option>Light</option>
            <option>Medium</option>
            <option>Heavy</option>
          </select>
          <select onChange={this.props.gameTypeFilter}>
            <option>Type</option>
            <option>Party</option>
            <option>Strategy</option>
            <option>Thematic</option>
            <option>Children's</option>
            <option>Family</option>
            <option>Abstract</option>
          </select>
          <button id="location" onClick={this.props.changeCards}>Locations</button>
        </nav>
        </div>
    )

    }
  }
}

export default NavBar;
