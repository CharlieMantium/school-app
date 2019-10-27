import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
	it('should render NotFoundPage correctly', () => {
		const wrapper = shallow(<NotFoundPage />);
		expect(wrapper.find('[data-test="not-found-message"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="react-link"]').exists()).toBe(true);
	});
});
