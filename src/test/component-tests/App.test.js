import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../../App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should instantiate our good friend App', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('getData method should change state with data from district', () => {
    const before = {...wrapper.state('stats')}
    const mockData = [
      {
        "Location": "Colorado",
        "TimeFrame": 2007,
        "DataFormat": "Percent",
        "Data": 0.39465
      }]
    wrapper.instance().getStats(mockData)
    expect(wrapper.state('stats')).not.toEqual(before)
  })

  it('should update state with all districts that match user input', () => {
    wrapper.instance().filterStats('COL');
    expect(wrapper.state('stats').length).toEqual(2);
  })

})