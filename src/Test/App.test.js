import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockData = [{
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

const mockGameData = [{
  name: "Catan",
  minPlayers: 3,
  maxPlayers: 6,
  weight: "medium",
  timeToPlay: 100,
  type: "strategy",
  features: ["trading","dice rolling","family"]
}]

const shuffleMock = jest.fn()
const searchByTextMock = jest.fn()
const searchLowerCaseMock = jest.fn()
const filterAllCardsMock = jest.fn()
const filterAllCardsPlayersMock = jest.fn()
const filterAllCardsByTypeMock = jest.fn()
const filterFilteredCardsMock = jest.fn()
const filterFilteredCardsByTypeMock = jest.fn()
const playerFilterMock = jest.fn()
const weightFitlerMock = jest.fn()
const gameTypeFilterMock = jest.fn()
const foodFilterMock = jest.fn()
const drinkFilterMock = jest.fn()
const sellerFilterMock = jest.fn()
const bringGameFilterMock = jest.fn()


describe('App', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <App 
      />
    )
  })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have the proper defualt state', () => {
    expect(wrapper.state('locations')).toEqual([]);
    expect(wrapper.state('games')).toEqual([]);
    expect(wrapper.state('weight')).toEqual(null);
    expect(wrapper.state('players')).toEqual(null);
    expect(wrapper.state('gameType')).toEqual(null);
    expect(wrapper.state('filteredGames')).toEqual([]);
    expect(wrapper.state('filteredLocations')).toEqual([]);
    expect(wrapper.state('searchInput')).toEqual('');
  });

  it('should filter locations by has food', () => {
    wrapper.state().locations = mockData
    const instance = wrapper.instance()
    expect(wrapper.state('filteredLocations')).toEqual([]);
    instance.foodFilter();
    expect(wrapper.state('filteredLocations')).toEqual(mockData);
  });

  it('should filter locations by has drink', () => {
    wrapper.state().locations = mockData
    const instance = wrapper.instance()
    expect(wrapper.state('filteredLocations')).toEqual([]);
    instance.drinkFilter();
    expect(wrapper.state('filteredLocations')).toEqual(mockData);
  });

  it('should filter locations by has games', () => {
    wrapper.state().locations = mockData
    const instance = wrapper.instance()
    expect(wrapper.state('filteredLocations')).toEqual([]);
    instance.bringGameFilter();
    expect(wrapper.state('filteredLocations')).toEqual(mockData);
  });

  it('should filter locations by sells games', () => {
    wrapper.state().locations = mockData
    const instance = wrapper.instance()
    expect(wrapper.state('filteredLocations')).toEqual([]);
    instance.sellerFilter();
    expect(wrapper.state('filteredLocations')).toEqual([]);
  });

  it('should filter locations by has drink', () => {
    wrapper.state().locations = mockData
    const instance = wrapper.instance()
    expect(wrapper.state('filteredLocations')).toEqual([]);
    instance.drinkFilter();
    expect(wrapper.state('filteredLocations')).toEqual(mockData);
  });

});