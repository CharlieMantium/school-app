import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Input';
import testData from '../fixtures/inputData';

describe('Input', () => {
  it('should render Input correctly with test data', () => {
    const wrapper = shallow(<Input {...testData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Input and error message correctly with errorMsg', () => {
    const wrapper = shallow(<Input {...testData} errorMsg="error message" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Input correctly without non-required data', () => {
    const wrapper = shallow(<Input onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
