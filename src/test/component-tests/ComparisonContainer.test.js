import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from '../../ComparisonContainer';

describe('ComparisonContainer', () => {

  let mockData = [
    { statType : "Percent",
      stats: { 
        2004: 0.174,
        2005 : 0.202  
      } },
    { statType : "Percent",
      stats: { 
        2004: 0.474,
        2005 : 0.602  
      } }];
  let mockComparison = {
    'ACADEMY 20': 0.407,
    'ADAMS-ARAPAHOE 28J': 0.657,
    compared: 1.614
  };


  it('should match the snapshot', () => {
    let wrapper = 
      shallow(<ComparisonContainer 
        selectedCards={mockData} 
        comparison={mockComparison}
      />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should turn decimals into percentages', () => {
    let wrapper = 
      shallow(<ComparisonContainer 
        selectedCards={mockData} 
        comparison={mockComparison}
      />);
    
    expect(wrapper.find('.district-percent-left').text()).toEqual('40%');
  });

  it('should not turn numbers into percentages', () => {
    let mockData = [
      { statType : "Number",
        stats: { 
          2004: 174,
          2005 : 202  } },
      { statType : "Number",
        stats: { 
          2004: 474,
          2005 : 602  
        } }];
    let mockComparison = {
      'ACADEMY 20': 136.333,
      "ADAMS COUNTY 14": 0,
      compared: null
    };
    let wrapper = 
      shallow(<ComparisonContainer 
        selectedCards={mockData} 
        comparison={mockComparison}
      />);
    
    expect(wrapper.find('.district-percent-left').text()).toEqual('136');
  });

  it('should do a comparison if stat is a number', () => {
    let wrapper = 
      shallow(<ComparisonContainer 
        selectedCards={mockData} 
        comparison={mockComparison}
      />);
    
    expect(wrapper.find('.district-comparison').text()).toEqual('161%');
  });

  it('should not do a comparison if stat is not a number', () => {
    let mockComparison = {
      'ACADEMY 20': 0.407,
      'ADAMS-ARAPAHOE 28J': 0.657,
      compared: Infinity
    };
    let wrapper = 
      shallow(<ComparisonContainer 
        selectedCards={mockData} 
        comparison={mockComparison}
      />);
    
    expect(wrapper.find('.district-comparison').text())
      .toEqual('not comparable to');
  });


});