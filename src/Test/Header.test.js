import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';


describe('Header', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Header/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});