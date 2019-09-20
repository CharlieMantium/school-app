import React from 'react';
import { shallow } from 'enzyme';

import ActivitiesListFilter from '../../components/ActivitiesListFilter';

describe('ActivitiesListFilter', () => {
  it('should render ActivitiesListFilter correctly', () => {
    const wrapper = shallow(<ActivitiesListFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
