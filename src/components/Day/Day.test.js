import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { shallowWithIntl } from 'tests/helper/intlEnzymeTestHelper';
import testState from 'tests/fixtures/state';
import { getActivitiesForDay } from 'store/activities/selectors';
import { MONDAY } from 'constants/dates';

import { DayUnwrapped } from './Day';

describe.skip('Day', () => {
  it('should render Day with testState', () => {
    const testDay = MONDAY;
    const wrapper = shallowWithIntl(
      <BrowserRouter>
        <DayUnwrapped
          weekDay={testDay}
          activities={getActivitiesForDay(testState.activities.items, testDay)}
        />
      </BrowserRouter>,
    );
    expect(wrapper.find('[data-test="day-name"]').text()).toBe(testDay);
    expect(wrapper.find('[data-test="activities-list-item"]')).toHaveLength(2);
  });

  it('should render Day with no activities', () => {
    const testDay = MONDAY;
    const wrapper = shallowWithIntl(
      <BrowserRouter>
        <DayUnwrapped weekDay={testDay} activities={getActivitiesForDay([], testDay)} />
      </BrowserRouter>,
    );
    expect(wrapper.find('[data-test="day-name"]').text()).toBe(testDay);
    expect(wrapper.find('[data-test="activities-list-item"]').exists()).toBe(false);
  });
});

// TODO: correct above tests
