import React from 'react';
import { shallow } from 'enzyme';

import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import testState from 'tests/fixtures/state';
import { AddActivityPageUnwrapped } from './AddActivityPage';

describe('AddActivityPage', () => {
  it('should handle onSubmit', () => {
    const onStartAddActivitySpy = jest.fn();
    const historySpy = { push: jest.fn() };
    const wrapper = shallow(
      <AddActivityPageUnwrapped onStartAddActivity={onStartAddActivitySpy} history={historySpy} />,
    );
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith(ACTIVITY_PLAN_ROUTE);
    expect(onStartAddActivitySpy).toHaveBeenLastCalledWith(testState.activities.items[1]);
  });
});
