import React from 'react';

import testData from 'tests/fixtures/inputData';
import { mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';

import Input from './Input';

describe('Input', () => {
  it('should render Input correctly with test data', () => {
    const wrapper = mountWithIntl(<Input {...testData} />);
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="error-message"]').exists()).toBe(false);
  });

  it('should render Input and error message correctly with errorMsg', () => {
    const errorMsg = 'error message';
    const wrapper = mountWithIntl(<Input {...testData} errorMsg={errorMsg} />);
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="error-message"]').text()).toBe(errorMsg);
  });
});
