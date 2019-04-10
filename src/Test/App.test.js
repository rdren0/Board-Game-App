import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
      <App />
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

});