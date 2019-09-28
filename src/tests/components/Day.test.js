import React from 'react';
import { shallow } from 'enzyme';

import Day from '../../components/Day';
import testState from '../fixtures/state';
import { getActivitiesForDay } from '../../store/activities/selectors';
import { MONDAY } from '../../constants/dates';

describe('Day', () => {
  it('should render Day with testState', () => {
    const testDay = MONDAY;
    const wrapper = shallow(
      <Day
        weekDay={testDay}
        activities={getActivitiesForDay(testState.activities.items, testDay)}
      />,
    );
    expect(wrapper.find('[data-test="day-name"]').text()).toBe(testDay.toUpperCase());
    expect(wrapper.find('[data-test="activities-list-item"]')).toHaveLength(2);
  });

  it('should render Day with no activities', () => {
    const testDay = MONDAY;
    const wrapper = shallow(
      <Day weekDay={testDay} activities={getActivitiesForDay([], testDay)} />,
    );
    expect(wrapper.find('[data-test="day-name"]').text()).toBe(testDay.toUpperCase());
    expect(wrapper.find('[data-test="activities-list-item"]').exists()).toBe(false);
  });
});
