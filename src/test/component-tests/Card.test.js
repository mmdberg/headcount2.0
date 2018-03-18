import React from 'react';
import { shallow, mount } from 'enzyme';
import mockCardData from '../../data/mock_card_data'
import Card from '../../Card';


describe('Card', () => {

  let wrapper;

  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card stats={mockCardData} statType={'Percent'} />);
  });
  
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add class higher-achievement to percent values over 50', () => {
    wrapper.instance().yearValues(mockCardData);
    expect(wrapper.find('.higher-achievement').length).toEqual(14);
  });

  it('should not add class higher-achievement when statType is not percent', () => {
    wrapper = shallow(
      <Card
        stats={mockCardData}
        statType={'Number'}/>
    );

    wrapper.instance().yearValues(mockCardData);
    expect(wrapper.find('.higher-achievement').length).toEqual(0);
  })

  it('should call selectCard on click', () => {
    wrapper = shallow(
      <Card
        stats={mockCardData}
        selectCard={mockFunction} />
    );
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  });

});