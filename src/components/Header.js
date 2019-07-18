import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>School App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Activity Plan</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Activity</NavLink>
  </header>
);

export default Header;