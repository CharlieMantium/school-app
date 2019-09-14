import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Input';

test('should render Input correctly with test data', () => {
  const testData = {
    type: 'text',
    placeholder: 'Put your text here.',
    value: 'this input value',
    onChange: () => {},
    onBlur: () => {},
    errorMsg: 'error text',
  };
  const wrapper = shallow(<Input {...testData} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Input correctly without non-required data', () => {
  const wrapper = shallow(<Input onChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
