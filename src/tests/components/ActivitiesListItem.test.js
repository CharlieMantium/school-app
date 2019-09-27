import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListItem from '../../components/ActivitiesListItem';
import testState from '../fixtures/state';

describe('ActivitiesListItem', () => {
  it('should render ActivitiesListItem correctly', () => {
    const wrapper = shallow(<ActivitiesListItem activity={testState.activities.items[3]} />);
    const { name, day, classNo, teacher, room } = testState.activities.items[3];
    expect(wrapper.find('[data-test="react-link"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="activity-name"]').text()).toBe(name);
    expect(wrapper.find('[data-test="activity-details"]').text()).toBe(
      `On ${day} on ${classNo} class with ${teacher} in room: ${room}`,
    );
  });
});
