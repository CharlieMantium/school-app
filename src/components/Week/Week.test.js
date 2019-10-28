import React from 'react';
import { shallow } from 'enzyme';

import { WeekUnwrapped } from './Week';
import testState from '../../tests/fixtures/state';
import { daysOfTheWeek } from '../../constants/dates';

describe('Week', () => {
  it('should render Week correctly', () => {
    const wrapper = shallow(<WeekUnwrapped activities={testState.activities.items} />);
    expect(wrapper.find('[data-test="day-component"]')).toHaveLength(daysOfTheWeek.length);
  });
});
