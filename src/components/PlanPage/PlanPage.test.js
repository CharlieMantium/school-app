import React from 'react';
import { shallow } from 'enzyme';

import { PlanPageUnwrapped } from './PlanPage';

describe('PlanPage', () => {
  it('should render PlanPage correctly', () => {
    const wrapper = shallow(<PlanPageUnwrapped />);
    expect(wrapper.find('[data-test="filter-component"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="week-component"]').exists()).toBe(true);
  });
});
