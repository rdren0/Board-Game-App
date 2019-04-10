import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



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