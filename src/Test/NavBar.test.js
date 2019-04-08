import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../Components/NavBar';


describe('NavBar', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <NavBar/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});