import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../Components/Location';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const toggleFavMock = jest.fn()


const liked = false;
const mockLocation = [
{name: "Denver Beer Company",
address: "1695 Platte St, Denver, CO 80202",
website: "http://denverbeerco.com/",
hasFood: true,
hasDrinks: true,
sellsGames: false,
weekdayOpen: "11AM",
weekdayClose: "11PM",
weekendOpen: "11AM",
weekendClose: "11PM",
googleMapsLink: null,
bringYourOwnGame: true,
logo: "https://i.imgur.com/UfniQUC.png",
gamesOffered: [8,9,52,54]}
]

describe('Location', () => {
  let wrapper;
  
 beforeEach(() =>{
    wrapper = shallow(
      <Location
      name={mockLocation.name}
       address = {mockLocation.address}
        website = {mockLocation.website}
        hasFood = {mockLocation.hasFood}
        logo = {mockLocation.logo}
        hasDrinks = {mockLocation.hasDrinks}
        sellsGames = {mockLocation.sellsGames}
        weekdayOpen = {mockLocation.weekdayOpen}
        weekdayClose = {mockLocation.weekdayClose}
        weekendOpen = {mockLocation.weekendOpen}
        weekendClose = {mockLocation.weekendClose}
        googleMapsLink = {mockLocation.googleMapsLink}
        bringYourOwnGame = {mockLocation.bringYourOwnGame}
        gamesOffered = {mockLocation.gamesOffered}
        isFavorite={liked}
        toggleFav={toggleFavMock}/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
