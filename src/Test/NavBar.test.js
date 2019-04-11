import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockView = "Games"

const mockGames = [{
  name: "Betrayal at House on the Hill",minPlayers: 3,maxPlayers: 6,weight: "medium",
  timeToPlay: 60,type: "thematic",features: ["adventure","hidden traitor","dice rolling","cooperative"],
  image: "https://i.imgur.com/t12PXuZ.jpg",gameId: 4},
  {name: "Boss Monster",minPlayers: 2,maxPlayers: 4,weight: "medium",timeToPlay: 20,type: "strategy",features: ["auction","family"],
  image: "https://i.imgur.com/pbutakO.jpg",gameId: 5},
  {name: "Camel Up",minPlayers: 2,maxPlayers: 8,weight: "medium",timeToPlay: 30,type: "party",
  features: ["dice rolling","family","wagering"],image: "https://i.imgur.com/93iAMYa.jpg",gameId: 6}
  ]

const changeCards = jest.fn ()
const playerFilter = jest.fn ()
const weightFilter = jest.fn ()
const gameTypeFilter = jest.fn ()
const foodFilter = jest.fn ()
const drinkFilter = jest.fn ()
const sellerFilter = jest.fn ()
const bringGameFilter = jest.fn ()

describe('NavBar', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <NavBar
      games={mockGames}
      changeCards = {changeCards}
      playerFilter={playerFilter}
      weightFilter={weightFilter}
      gameTypeFilter={gameTypeFilter}
      oodFilter={foodFilter}
      drinkFilter={drinkFilter}
      sellerFilter={sellerFilter}
      bringGameFilter={bringGameFilter} 
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

   it('should toggle between Games and Locations', () => {
    wrapper.find('.toggle-button').simulate('click', { target: { value: 'Games' } });
    expect(wrapper.find('#location').text()).toBe('Locations')
  });
});
