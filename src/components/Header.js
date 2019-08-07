import React from 'react';
import { NavLink } from 'react-router-dom';
import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from '../constants/routes';

const Header = () => (
  <header>
    <h1>School App</h1>
    <NavLink to={ACTIVITY_PLAN_ROUTE} activeClassName="is-active" exact>
      Activity Plan
    </NavLink>
    <NavLink to={CREATE_ACTIVITY_ROUTE} activeClassName="is-active">
      Add Activity
    </NavLink>
  </header>
);

export default Header;
