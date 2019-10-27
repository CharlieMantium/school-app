import React from 'react';
import { shallow } from 'enzyme';

import { EditActivityPageUnwrapped } from './EditActivityPage';
import testState from '../../tests/fixtures/state';
import testProps from '../../tests/fixtures/props';

let onStartEditActivitySpy;
let onStartRemoveActivitySpy;
let historySpy;
let wrapper;

beforeEach(() => {
	onStartEditActivitySpy = jest.fn();
	onStartRemoveActivitySpy = jest.fn();
	historySpy = { push: jest.fn() };
	wrapper = shallow(
		<EditActivityPageUnwrapped
			activity={testState.activities.items[1]}
			onStartEditActivity={onStartEditActivitySpy}
			onStartRemoveActivity={onStartRemoveActivitySpy}
			history={historySpy}
			match={testProps.match}
		/>,
	);
});

describe('EditActivityPage', () => {
	it('should render EditActivityPage correctly', () => {
		expect(wrapper.find('[data-test="loader"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="button-remove"]').exists()).toBe(true);
	});

	it('should handle onSubmit', () => {
		wrapper.find('ActivityForm').prop('onSubmit')(
			testState.activities.items[1],
		);
		expect(onStartEditActivitySpy).toHaveBeenLastCalledWith(
			testProps.match.params.id,
			testState.activities.items[1],
		);
	});

	it('should handle onRemoveActivities', done => {
		wrapper.find('[data-test="button-remove"]').simulate('click');
		expect(onStartRemoveActivitySpy).toHaveBeenCalledWith(
			testProps.match.params.id,
		);
		done();
	});
});
