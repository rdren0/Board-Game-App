import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from '../Components/LikeButton';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const handleClick= jest.fn()


describe('LikeButton', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <LikeButton
      />
    )
  })


  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should toggle Favorite Status', () => {
    const instance = wrapper.instance();
    expect(wrapper.props('isFavorite')).toEqual(false);
    wrapper.find('.like-btn').simulate('click');
    expect(wrapper.props('isFavorite')).toEqual(true);
  });

})