import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to={ACTIVITY_PLAN_ROUTE} /> : <Component {...props} />
    }
  />
);

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.uid),
});

export default connect(mapStateToProps)(PublicRoute);
