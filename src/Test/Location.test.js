import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../Components/Location';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



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