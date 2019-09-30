import React from 'react';
import { shallow } from 'enzyme';

import { AddActivityPageUnwrapped } from './AddActivityPage';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import testState from '../../tests/fixtures/state';

describe('AddActivityPage', () => {
  it('should handle onSubmit', () => {
    const onAddActivitySpy = jest.fn();
    const historySpy = { push: jest.fn() };
    const wrapper = shallow(
      <AddActivityPageUnwrapped onAddActivity={onAddActivitySpy} history={historySpy} />,
    );
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith(ACTIVITY_PLAN_ROUTE);
    expect(onAddActivitySpy).toHaveBeenLastCalledWith(testState.activities.items[1]);
  });
});
