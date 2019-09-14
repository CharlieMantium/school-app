import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListItem from '../../components/ActivitiesListItem';
import testState from '../fixtures/state';

test('should render ActivitiesListItem correctly', () => {
  const wrapper = shallow(<ActivitiesListItem activity={testState.activities.items[3]} />);
  expect(wrapper).toMatchSnapshot();
});
