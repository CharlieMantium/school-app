import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import LoginPage from '../components/LoginPage';
import AddActivityPage from '../components/AddActivityPage';
import EditActivityPage from '../components/EditActivityPage';
import PlanPage from '../components/PlanPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {
  LOGIN_PAGE_ROUTE,
  ACTIVITY_PLAN_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  EDIT_ACTIVITY_ID_ROUTE,
} from '../constants/routes';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Switch>
        <PublicRoute path={LOGIN_PAGE_ROUTE} component={LoginPage} exact />
        <PrivateRoute path={ACTIVITY_PLAN_ROUTE} component={PlanPage} />
        <PrivateRoute path={CREATE_ACTIVITY_ROUTE} component={AddActivityPage} />
        <PrivateRoute path={EDIT_ACTIVITY_ID_ROUTE} component={EditActivityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
