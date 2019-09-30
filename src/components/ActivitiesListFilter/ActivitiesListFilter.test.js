import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListFilter from './ActivitiesListFilter';

describe('ActivitiesListFilter', () => {
  it('should render ActivitiesListFilter correctly', () => {
    const wrapper = shallow(<ActivitiesListFilter />);
    expect(wrapper.find('[data-test="input-component"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="input-component"]').prop('type')).toBe('text');
  });
});
