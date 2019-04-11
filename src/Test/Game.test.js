import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../Components/Game';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mock = [
{name: "7 Wonders",
  minPlayers: 2,
  maxPlayers: 7,
  weight: "medium",
  timeToPlay: 30,
  type: "strategy",
  features: ["card drafting","hand management"],
  image: "https://i.imgur.com/lkrz4I3.jpg",
  gameId: 1}
]

describe('Game', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Game
      name={mock.name}
        minPlayers={mock.minPlayers}
        maxPlayers={mock.maxPlayers}
        weight={mock.weight}
        timeToPlay={mock.timeToPlay}
        type={mock.type}
        features={mock.features}
        image={mock.image}
        id={mock.gameId}
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


