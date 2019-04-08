import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../Components/Game';


describe('Game', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Game/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});