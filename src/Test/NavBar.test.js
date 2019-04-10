import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockView = "Games"

describe('NavBar', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <NavBar
      // games={this.props.gamesData}
      // changeCards = {this.changeCards}
      // playerFilter={this.props.playerFilter}
      // weightFilter={this.props.weightFilter}
      // gameTypeFilter={this.props.gameTypeFilter}
      // oodFilter={ this.props.foodFilter }
      // drinkFilter={this.props.drinkFilter }
      // sellerFilter={ this.props.sellerFilter }
      // bringGameFilter={ this.props.bringGameFilter } 
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
   it('should toggle between Games and Locations', () => {
    wrapper.find('.toggle-button').simulate('click', { target: { value: 'Games' } });
    expect(wrapper.state('status')).toEqual("Locations");

  });
});