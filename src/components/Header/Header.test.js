import React from 'react';
import { shallow } from 'enzyme';

import { HeaderUnwrapped } from './Header';

describe('Header', () => {
  it('should render Header correctly', () => {
    const onSetFilterSpy = jest.fn();
    const wrapper = shallow(<HeaderUnwrapped onSetFilter={onSetFilterSpy} />);
    expect(wrapper.find('[data-test="app-name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="react-navlink"]')).toHaveLength(1);
  });
});
