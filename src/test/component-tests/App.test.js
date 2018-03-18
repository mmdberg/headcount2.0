import React from 'react';
import {shallow } from 'enzyme';
import App from '../../App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should instantiate our good friend App', () => {
    expect(wrapper).toBeDefined();
  });  
  
  it('should start with an empty state', () => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    const expectedState = {
      stats: [],
      selectedCards: []
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('getStats method should change state with data from district', () => {
    const before = {...wrapper.state('stats')};
    const mockData = [
      {
        "Location": "Colorado",
        "TimeFrame": 2007,
        "DataFormat": "Percent",
        "Data": 0.39465
      }];  
    wrapper.instance().getStats(mockData);  
    expect(wrapper.state('stats')).not.toEqual(before);
  });  

  it('should update state with all districts that match user input', () => {
    wrapper.instance().filterStats('COL');
    expect(wrapper.state('stats').length).toEqual(2);
  }); 

  it('should add the card to state on click if not already selected', () => {
    const mockData = {
      location: "COLORADO",
      className: "card"
    };
    
    expect(wrapper.state('selectedCards').length).toEqual(0);
    wrapper.instance().selectCard(mockData);
    expect(wrapper.state('selectedCards').length).toEqual(1);
  }); 
  
  it('should remove the card from state on click if already selected', () => {
    const mockState = {
      stats: [],
      selectedCards: [{
        location: "COLORADO",
        className: "clicked"
      },
      {
        location: "COLORADO SPRINGS",
        className: "clicked"
      }]
    };
    const expectedState = [{
      location: "COLORADO SPRINGS",
      className: "clicked"
    }];
    const mockData = {
      location: "COLORADO",
      className: "clicked"
    };
    wrapper.setState(mockState);
    wrapper.instance().selectCard(mockData);
    expect(wrapper.state('selectedCards')).toEqual(expectedState);
  });
  
  it('should replace the second card if two cards are already selected', () => {
    const mockState = {
      stats: [],
      selectedCards: [{
        location: "COLORADO",
        className: "card"
      },
      {
        location: "COLORADO SPRINGS",
        className: "card"
      }]
    };
    const mockData = {
      location: "AKRON R-1",
      className: "card"
    };
    const expectedState = [{
      location: "COLORADO",
      className: "card"
    },
    {
      location: "AKRON R-1",
      className: "card"
    }];
    
    wrapper.setState(mockState);
    wrapper.instance().selectCard(mockData);
    expect(wrapper.state('selectedCards')).toEqual(expectedState);
  });
  
  it('should make comparison when second card is selected', () => {
    const mockState = {
      stats: [],
      selectedCards: [{
        location: "COLORADO",
        className: "card"
      }]
    };

    const mockData = {
      location: "AKRON R-1",
      className: "card"
    };

    wrapper.setState(mockState);
    wrapper.instance().selectCard(mockData);
    expect(wrapper.state('comparison')).toBeTruthy();
  });

  it('should not create comparison when one card is selected', () => {
    const mockData = {
      location: "AKRON R-1",
      className: "card"
    };

    wrapper.instance().selectCard(mockData);
    expect(wrapper.state('comparison')).toBeFalsy();
  });
    
});