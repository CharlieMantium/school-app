import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';
import testState from 'tests/fixtures/state';

import ActivitiesListItem from './ActivitiesListItem';

describe('ActivitiesListItem', () => {
  it('should render ActivitiesListItem correctly', () => {
    const wrapper = mountWithIntl(
      <BrowserRouter>
        <ActivitiesListItem activity={testState.activities.items[3]} />
      </BrowserRouter>,
      'en',
    );
    const { name, teacher, room } = testState.activities.items[3];
    expect(wrapper.find('[data-test="react-link"]').exists()).toBe(true);
    expect(wrapper.find('a[data-test="react-link"]').text()).toBe(name);
    expect(wrapper.find('[data-test="activity-details"]').text()).toBe(
      `Teacher: ${teacher}, in room: ${room}`,
    );
  });
});
