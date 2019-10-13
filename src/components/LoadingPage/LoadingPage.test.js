import React from 'react';
import { shallow } from 'enzyme';

import LoadingPage from './LoadingPage';

describe('Input', () => {
  it('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper.find('[data-test="loader-gif"]').exists()).toBe(true);
  });
});
