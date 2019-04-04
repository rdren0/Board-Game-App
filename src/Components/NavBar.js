import React, {Component} from 'react';
import '../css/NavBar.css'
import onePlayer from '../images/One-Player.svg'
import twoPlayers from '../images/Two-Players.svg'
import threePlayers from '../images/Three-Players.svg'
import fourPlayers from '../images/Four-Players.svg'
import fivePlayers from '../images/Five-Players.svg'
import groupPlayers from '../images/Group-Players.svg'





class NavBar extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <nav>
        <ul>
          <li><img src={onePlayer} alt="One Player Games"/></li>
          <li><img src={twoPlayers} alt="Two Player Games"/></li>
          <li><img src={threePlayers} alt="Three Player Games"/></li>
          <li><img src={fourPlayers} alt="Four Player Games"/></li>
          <li><img src={fivePlayers} alt="Five Player Games"/></li>
          <li><img src={groupPlayers} alt="Group Player Games"/></li>
        </ul>
        <select>
          <option>Weight </option>
          <option>Light</option>
          <option>Medium</option>
          <option>Heavy</option>
        </select>
        <select>
          <option>Type</option>
          <option>Party</option>
          <option>Strategy</option>
          <option>Thematic</option>
          <option>Children's</option>
          <option>Family</option>
          <option>Abstract</option>
        </select>
        <button>Locations</button>
      </nav>
    )
  }
}

export default NavBar;
