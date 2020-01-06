import React from 'react';
import { shallow } from 'enzyme';
import { mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';
import { Router } from 'react-router-dom';

import Header from './Header';

const onSetFilterSpy = jest.fn();
const onStartLogoutSpy = jest.fn();

describe.skip('Header', () => {
  it('should render Header correctly', () => {
    const wrapper = shallow(
      <Header onSetFilter={onSetFilterSpy} onStartLogout={onStartLogoutSpy} />,
    );
    expect(wrapper.find('[data-test="app-name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="react-navlink"]')).toHaveLength(1);
  });
  it('should handle onStartLogout', () => {
    const wrapper = mountWithIntl(
      <Router>
        <Header onSetFilter={onSetFilterSpy} onStartLogout={onStartLogoutSpy} />
      </Router>,
    );
    wrapper.find('[data-test="button-logout"]').simulate('click');
    expect(onStartLogoutSpy).toHaveBeenCalled();
  });
});
