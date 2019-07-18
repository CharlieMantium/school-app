import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddActivityPage from '../components/AddActivityPage';
import EditActivityPage from '../components/EditActivityPage';
import Header from '../components/Header';
import PlanPage from '../components/PlanPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={PlanPage} exact={true} />
        <Route path="/create" component={AddActivityPage} />
        <Route path="/edit/:id" component={EditActivityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;