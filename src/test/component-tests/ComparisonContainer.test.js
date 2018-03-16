import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonContainer from '../../ComparisonContainer';

describe('ComparisonContainer', () => {

  it('should match the snapshot', () => {
    let mockData = [{
      '2004': 0.24,
      '2005': 0.278
    }];
    let wrapper = shallow(<ComparisonContainer selectedCards={mockData}/>);

    expect(wrapper).toMatchSnapshot();
  });

});