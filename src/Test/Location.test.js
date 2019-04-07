import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../Components/Location';


describe('Location', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Location/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});