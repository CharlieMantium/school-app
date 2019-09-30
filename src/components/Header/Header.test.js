import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('[data-test="app-name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="react-navlink"]')).toHaveLength(2);
  });
});
