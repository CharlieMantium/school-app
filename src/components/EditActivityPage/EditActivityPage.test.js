import React from 'react';
import { shallow } from 'enzyme';

import { EditActivityPageUnwrapped } from './EditActivityPage';
import testState from '../../tests/fixtures/state';

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
    />,
  );
});

describe('EditActivityPage', () => {
  it('should render EditActivityPage correctly', () => {
    expect(wrapper.find('[data-test="form"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="button-remove"]').exists()).toBe(true);
  });

  it('should handle onSubmit', () => {
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(onStartEditActivitySpy).toHaveBeenLastCalledWith(
      testState.activities.items[1].id,
      testState.activities.items[1],
    );
    // I don't knwo how to write those fucking tests for historySpy.push to be called
  });

  it('should handle onRemoveActivities', () => {
    wrapper.find('button').simulate('click');
    expect(onStartRemoveActivitySpy).toHaveBeenCalledWith(testState.activities.items[1].id);
  });
});
