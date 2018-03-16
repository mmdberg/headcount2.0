import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../../Search';

describe('Search', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<Search />);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call filterStats function on handleChange', () => {
    const mockFilterData = jest.fn();
    const mockEvent = { target: { value: 'C'} };
    const wrapper = shallow(<Search filterStats={mockFilterData} />);
    wrapper.instance().handleChange(mockEvent);
    expect(mockFilterData).toHaveBeenCalled();
  });

});
