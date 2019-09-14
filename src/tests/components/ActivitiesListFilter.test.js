import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListFilter from '../../components/ActivitiesListFilter';

test('should render ActivitiesListFilter correctly', () => {
  const wrapper = shallow(<ActivitiesListFilter />);
  expect(wrapper).toMatchSnapshot();
});
