import React from 'react';
import { shallow } from 'enzyme';

import { AddActivityPage } from '../../components/AddActivityPage';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import testState from '../fixtures/state';

let onAddActivitySpy;
let historySpy;
let wrapper;

beforeEach(() => {
  onAddActivitySpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<AddActivityPage onAddActivity={onAddActivitySpy} history={historySpy} />);
});

describe('AddActivityPage', () => {
  it('should render AddActivityPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit', () => {
    wrapper.find('ActivityForm').prop('onSubmit')(testState.activities.items[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith(ACTIVITY_PLAN_ROUTE);
    expect(onAddActivitySpy).toHaveBeenLastCalledWith(testState.activities.items[1]);
  });
});
