import React from 'react';
import { shallow, mount } from 'enzyme';
import mockCardContainerData from '../../data/mock_card_container_data'
import ComparisonContainer from '../../ComparisonContainer';

describe ('ComparisonContainer', () => {

  it('should match the snapshot', () => {

    let wrapper = shallow(<ComparisonContainer selectedCards={mockCardContainerData}/>)

    expect(wrapper).toMatchSnapshot();
  })

})