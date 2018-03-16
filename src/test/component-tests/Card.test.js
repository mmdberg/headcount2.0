import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../Card';


describe('Card', () => {

  let wrapper;

  let mockData = {
    '2004': 0.24,
    '2005': 0.578
  };
  const mockFunction = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Card data={mockData}/>);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add class goodSchool to values over .5', () => {
    wrapper.instance().yearValues(mockData);
    expect(wrapper.find('.goodSchool').length).toEqual(1);
  });

  it('should call selectCard on click if not selected', () => {
    wrapper = shallow(<Card className='card' data={mockData} selectCard={mockFunction}/>);
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should call deselectCard on click if selected', () => {
    wrapper = shallow(<Card className='card clicked' data={mockData} deselectCard={mockFunction}/>);
    wrapper.instance().handleClick();
    expect(mockFunction).toHaveBeenCalled();
  });
});