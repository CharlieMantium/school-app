import React from 'react';
import { shallow } from 'enzyme';

import PlanPage from '../../components/PlanPage';

describe('PlanPage', () => {
  it('should render PlanPage correctly', () => {
    const wrapper = shallow(<PlanPage />);
    expect(wrapper.find('[data-test="filter-component"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="week-component"]').exists()).toBe(true);
  });
});
