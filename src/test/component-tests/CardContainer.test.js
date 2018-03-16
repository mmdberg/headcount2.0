import React from 'react';
import { shallow, mount } from 'enzyme';
import mockCardContainerData from '../../data/mock_card_container_data'
import { CardContainer } from '../../CardContainer';

describe('CardContainer', () => {
  
  it('should match the snapshot', () => {
    let wrapper = shallow(<CardContainer  data={mockCardContainerData} 
                                          selectedCards={mockCardContainerData}
                          />)

    expect(wrapper).toMatchSnapshot();
  });

});