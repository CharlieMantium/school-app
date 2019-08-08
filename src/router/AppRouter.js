import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddActivityPage from '../components/AddActivityPage';
import EditActivityPage from '../components/EditActivityPage';
import Header from '../components/Header';
import PlanPage from '../components/PlanPage';
import NotFoundPage from '../components/NotFoundPage';
import {
  ACTIVITY_PLAN_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  EDIT_ACTIVITY_ID_ROUTE,
} from '../constants/routes';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path={ACTIVITY_PLAN_ROUTE} component={PlanPage} exact />
        <Route path={CREATE_ACTIVITY_ROUTE} component={AddActivityPage} />
        <Route path={EDIT_ACTIVITY_ID_ROUTE} component={EditActivityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
