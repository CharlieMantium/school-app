import React from 'react';
import { shallow } from 'enzyme';

import { PlanPageUnwrapped } from './PlanPage';

describe('PlanPage', () => {
	it('should render PlanPage correctly', () => {
		const onStartSetActivitiesSpy = jest.fn();
		const wrapper = shallow(
			<PlanPageUnwrapped onStartSetActivities={onStartSetActivitiesSpy} />,
		);
		expect(wrapper.find('[data-test="week-component"]').exists()).toBe(true);
	});
});
