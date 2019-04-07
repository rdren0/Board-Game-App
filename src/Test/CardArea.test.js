import React from 'react';
import ReactDOM from 'react-dom';
import CardArea from '../Components/CardArea';


describe('CardArea', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <CardArea/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});