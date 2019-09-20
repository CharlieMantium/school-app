import React from 'react';
import { shallow } from 'enzyme';

import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import { EditActivityPage } from '../../components/EditActivityPage';
import testState from '../fixtures/state';

let onEditActivitySpy;
let onRemoveActivitySpy;
let historySpy;
let wrapper;

beforeEach(() => {
  onEditActivitySpy = jest.fn();
  onRemoveActivitySpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditActivityPage
      activity={testState.activities.items[1]}
      onEditActivity={onEditActivitySpy}
      onRemoveActivity={onRemoveActivitySpy}
      history={historySpy}
    />,
  );
});

describe('EditActivityPage', () => {
  it('should render EditActivityPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit', () => {
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith(ACTIVITY_PLAN_ROUTE);
    expect(onEditActivitySpy).toHaveBeenLastCalledWith(
      testState.activities.items[1].id,
      testState.activities.items[1],
    );
  });

  it('should handle onRemoveActivities', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith(ACTIVITY_PLAN_ROUTE);
    expect(onRemoveActivitySpy).toHaveBeenLastCalledWith(testState.activities.items[1].id);
  });
});
