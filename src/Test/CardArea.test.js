import React from 'react';
import ReactDOM from 'react-dom';
import CardArea from '../Components/CardArea';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const favorites = []
const mockData = [{
name: "Betrayal at House on the Hill",minPlayers: 3,maxPlayers: 6,weight: "medium",
timeToPlay: 60,type: "thematic",features: ["adventure","hidden traitor","dice rolling","cooperative"],
image: "https://i.imgur.com/t12PXuZ.jpg",gameId: 4},
{name: "Boss Monster",minPlayers: 2,maxPlayers: 4,weight: "medium",timeToPlay: 20,type: "strategy",features: ["auction","family"],
image: "https://i.imgur.com/pbutakO.jpg",gameId: 5},
{name: "Camel Up",minPlayers: 2,maxPlayers: 8,weight: "medium",timeToPlay: 30,type: "party",
features: ["dice rolling","family","wagering"],image: "https://i.imgur.com/93iAMYa.jpg",gameId: 6}
]

describe('CardArea', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <CardArea
gamesData={mockData}
        favorites= {favorites}
        />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

   it('should have the proper defualt state', () => {
    expect(wrapper.state('view')).toEqual("Games");
    expect(wrapper.state('favorites')).toEqual([]);
  });

});