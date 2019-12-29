import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import { history } from 'router/AppRouter';
import { LOGIN_PAGE_ROUTE, ACTIVITY_PLAN_ROUTE } from 'constants/routes';

import App from './components/App';
import { firebase } from './firebase/firebase';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('app-root'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    renderApp();
    if (history.location.pathname === LOGIN_PAGE_ROUTE) {
      history.push(ACTIVITY_PLAN_ROUTE);
    }
  } else {
    renderApp();
    history.push(LOGIN_PAGE_ROUTE);
  }
});

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR.
