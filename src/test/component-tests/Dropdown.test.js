import React from 'react';
import { shallow, mount } from 'enzyme';
import Dropdown from '../../Dropdown.js';

describe('Dropdown', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getStats in handleChange', () => {
    const mockGetStats = jest.fn();
    const wrapper = shallow(<Dropdown getStats={mockGetStats} />);
    const mockEvent = {target: {value: 'somestring'}}

    wrapper.instance().handleChange(mockEvent);
    expect(mockGetStats).toHaveBeenCalled()
  })
})