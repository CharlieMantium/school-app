import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListItem from './ActivitiesListItem';
import testState from '../../tests/fixtures/state';

describe('ActivitiesListItem', () => {
	it('should render ActivitiesListItem correctly', () => {
		const wrapper = shallow(
			<ActivitiesListItem activity={testState.activities.items[3]} />,
		);
		const { name, teacher, room } = testState.activities.items[3];
		expect(wrapper.find('[data-test="react-link"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="react-link"]').text()).toBe(name);
		expect(wrapper.find('[data-test="activity-details"]').text()).toBe(
			`Teacher: ${teacher}, in room: ${room}`,
		);
	});
});
