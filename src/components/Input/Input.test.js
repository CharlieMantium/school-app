import React from 'react';
import { shallow } from 'enzyme';

import testData from 'tests/fixtures/inputData';
import Input from './Input';

describe('Input', () => {
  it('should render Input correctly with test data', () => {
    const wrapper = shallow(<Input {...testData} />);
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="error-message"]').exists()).toBe(false);
  });

  it('should render Input and error message correctly with errorMsg', () => {
    const errorMsg = 'error message';
    const wrapper = shallow(<Input {...testData} errorMsg={errorMsg} />);
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="error-message"]').text()).toBe(errorMsg);
  });
});
