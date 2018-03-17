import React from 'react';
import { shallow, mount } from 'enzyme';
import mockCardData from '../../data/mock_card_data'
import Card from '../../Card';


describe('Card', () => {

  let wrapper;

  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card stats={mockCardData} />);
  });
  
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add class higher-achievement to values over .5', () => {
    wrapper.instance().yearValues(mockCardData);
    expect(wrapper.find('.higher-achievement').length).toEqual(7);
  });

  it('should call selectCard on click if not selected', () => {
    wrapper = shallow(
      <Card
        className='card'
        stats={mockCardData}
        selectCard={mockFunction} />
    );
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  });

});