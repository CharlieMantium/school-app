import React from 'react';
import { mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';

import testState from 'tests/fixtures/state';
import testProps from 'tests/fixtures/props';

import { EditActivityPageUnwrapped } from './EditActivityPage';

let onStartEditActivitySpy;
let onStartRemoveActivitySpy;
let historySpy;
let wrapper;

beforeEach(() => {
  onStartEditActivitySpy = jest.fn();
  onStartRemoveActivitySpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = mountWithIntl(
    <EditActivityPageUnwrapped
      activity={testState.activities.items[1]}
      onStartEditActivity={onStartEditActivitySpy}
      onStartRemoveActivity={onStartRemoveActivitySpy}
      history={historySpy}
      match={testProps.match}
    />,
    'en',
  );
});

describe('EditActivityPage', () => {
  it('should render EditActivityPage correctly', () => {
    expect(wrapper.find('[data-test="loader"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="button-remove"]').exists()).toBe(true);
  });

  it('should handle onSubmit', () => {
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(onStartEditActivitySpy).toHaveBeenLastCalledWith(
      testProps.match.params.id,
      testState.activities.items[1],
    );
  });

  it('should handle onRemoveActivities', done => {
    wrapper.find('[data-test="button-remove"]').simulate('click');
    expect(onStartRemoveActivitySpy).toHaveBeenCalledWith(testProps.match.params.id);
    done();
  });
});
