import React from 'react';
import { shallow } from 'enzyme';

import { Week } from '../../components/Week';
import testState from '../fixtures/state';

test('should render Week correctly', () => {
  const wrapper = shallow(<Week activities={testState.activities.items} />);
  expect(wrapper).toMatchSnapshot();
});
