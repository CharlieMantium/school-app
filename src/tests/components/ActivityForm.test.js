import React from 'react';
import { shallow } from 'enzyme';

import ActivityForm from '../../components/ActivityForm';
import testState from '../fixtures/state';

test('should render ActivityForm correctly', () => {
  const wrapper = shallow(<ActivityForm onSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ActivityForm with testState', () => {
  const wrapper = shallow(
    <ActivityForm on onSubmit={() => {}} activity={testState.activities.items[1]} />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submition', () => {
  const wrapper = shallow(<ActivityForm onSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('classNoError').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
