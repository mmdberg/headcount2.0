import React from 'react';
import { shallow, mount } from 'enzyme';
import mockCardData from '../../data/mock_card_data'
import Card from '../../Card'


describe('Card', () => {

  let wrapper;

  const mockFunction = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Card data={mockCardData} />)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should add class goodSchool to values over .5', () => {
    wrapper.instance().yearValues(mockCardData);
    expect(wrapper.find('.goodSchool').length).toEqual(7)
  })

  it('should call selectCard on click if not selected',() => {
    wrapper = shallow(<Card className='card' data={mockCardData} selectCard={mockFunction}/>)
    wrapper.instance().handleClick()
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should call deselectCard on click if selected', () => {
    wrapper = shallow(<Card className='card clicked' data={mockCardData} deselectCard={mockFunction}/>)
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  })
})