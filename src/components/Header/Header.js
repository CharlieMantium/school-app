import React from 'react';
import { NavLink } from 'react-router-dom';

import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from '../../constants/routes';

const Header = () => (
  <header>
    <h1 data-test="app-name">School App</h1>
    <NavLink to={ACTIVITY_PLAN_ROUTE} activeClassName="is-active" exact data-test="react-navlink">
      Activity Plan
    </NavLink>
    <NavLink to={CREATE_ACTIVITY_ROUTE} activeClassName="is-active" data-test="react-navlink">
      Add Activity
    </NavLink>
  </header>
);

export default Header;
