import React from 'react';
import { shallow } from 'enzyme';

import Day from '../../components/Day';
import testState from '../fixtures/state';
import { getActivitiesForDay } from '../../store/activities/selectors';
import { MONDAY } from '../../constants/dates';

test('should render Day with testState', () => {
  const testDay = MONDAY;
  const wrapper = shallow(
    <Day weekDay={testDay} activities={getActivitiesForDay(testState.activities.items, testDay)} />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render Day with no activities', () => {
  const testDay = MONDAY;
  const wrapper = shallow(<Day weekDay={testDay} activities={getActivitiesForDay([], testDay)} />);
  expect(wrapper).toMatchSnapshot();
});
