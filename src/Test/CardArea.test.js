import React from 'react';
import ReactDOM from 'react-dom';
import CardArea from '../Components/CardArea';
import Navbar from '../Components/Navbar';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const favorites = []

const mockGames = [{
name: "Betrayal at House on the Hill",minPlayers: 3,maxPlayers: 6,weight: "medium",
timeToPlay: 60,type: "thematic",features: ["adventure","hidden traitor","dice rolling","cooperative"],
image: "https://i.imgur.com/t12PXuZ.jpg",gameId: 4},
{name: "Boss Monster",minPlayers: 2,maxPlayers: 4,weight: "medium",timeToPlay: 20,type: "strategy",features: ["auction","family"],
image: "https://i.imgur.com/pbutakO.jpg",gameId: 5},
{name: "Camel Up",minPlayers: 2,maxPlayers: 8,weight: "medium",timeToPlay: 30,type: "party",
features: ["dice rolling","family","wagering"],image: "https://i.imgur.com/93iAMYa.jpg",gameId: 6}
]

const mockLocation = [{
    name: "Bardo Coffee House",
    address: "238 South Broadway, Denver, CO 80209",
    website: "http://www.bardocoffee.com",
    hasFood: true,
    hasDrinks: true,
    sellsGames: false,
    weekdayOpen: "6AM",
    weekdayClose: "12AM",
    weekendOpen: "6AM",
    weekendClose: "12AM",
    bringYourOwnGame: true,
    logo: "https://i.imgur.com/8zbmUrg.png",
    gamesOffered: [7,8,15,52,53,54]
}]

const playerFilter = jest.fn() 

const weightFilter = jest.fn()

const gameTypeFilter = jest.fn()

const foodFilter = jest.fn()

const drinkFilter = jest.fn()

const sellerFilter = jest.fn()

const bringGameFilter = jest.fn()

const searchByText = jest.fn()

const toggleFav = jest.fn()

const filterFavorites = jest.fn()

const changeCards = jest.fn() 

const mockEvent = {target: {id:  'Locations' } };

describe('CardArea', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <CardArea
        gamesData={mockGames}
        locationData={mockLocation}
        favorites= {favorites}
        playerFilter={playerFilter}
        weightFilter={weightFilter}
        gameTypeFilter={gameTypeFilter}
        foodFilter={foodFilter}
        drinkFilter={drinkFilter}
        sellerFilter={sellerFilter}
        bringGameFilter={bringGameFilter}
        searchByText={searchByText}
        toggleFav={toggleFav}
        filterFavorites={filterFavorites}
        />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

   it('should have the proper default state', () => {
    expect(wrapper.state('view')).toEqual('Games');
  });

  // it('should toggle view', () => {
  //   wrapper.setState({view: 'Games'})
  //   expect(wrapper.state('view')).toEqual('Games');
  //   wrapper.find('.location toggle-button').simulate('click', {
  //     preventDefault: () => {}
  //   })
  //   wrapper.instance().changeCards();
  //   expect(wrapper.state('view')).toEqual('Locations')
  // });

});
