import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonContainer from '../../ComparisonContainer';

describe ('ComparisonContainer', () => {

  let mockData = [{
    '2004': 0.24,
    '2005': 0.278
  }]

  it('should match the snapshot', () => {
    let wrapper = shallow(<ComparisonContainer selectedCards={mockData}/>)

    expect(wrapper).toMatchSnapshot();
  })

  // it('should populate newDistricts array', () => {
  //   const mockComparison = {'2000': '2000'}
  //   let wrapper = mount(<ComparisonContainer comparison={mockComparison} selectedCards={mockData}/>)
  //   console.log(wrapper.document.querySelectorAll('h2'))
  //   expect(wrapper.newDistricts.length).toEqual(1)
  // })


})